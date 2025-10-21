import Efficiency from '@/components/efficiency';
import KeyMetrics from '@/components/key-metrics';
import Sidebar from '@/components/sidebar';
import StockLevels from '@/components/stock-levels';
import { getCurrentUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { CalcTotalValue, Stock, WeeklyProducts } from '@/lib/utils';

export default async function Dashboard() {
  const user = await getCurrentUser();
  const userId = user?.id;

  const [totalProducts, lowStockProducts, allProducts] = await Promise.all([
    prisma.product.count({
      where: {
        userId,
      },
    }),
    prisma.product.count({
      where: {
        userId,
        lowStockAt: { not: null },
        quantity: { lte: 5 },
      },
    }),
    prisma.product.findMany({
      where: {
        userId,
      },
      select: {
        price: true,
        quantity: true,
        createdAt: true,
      },
    }),
  ]);

  const recentProducts = await prisma.product.findMany({
    where: {
      userId,
    },
    take: 5,
    orderBy: {
      createdAt: 'desc',
    },
  });

  const totalValue = CalcTotalValue(allProducts);
  // in stock
  const { inStockPercentage, lowStockPercentage, outOfStockPercentage } = Stock({
    allProducts,
    totalProducts,
  });
  // weekly Products Chart
  const weeklyProductsData = WeeklyProducts(allProducts);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/dashboard" />
      <main className="ml-64 p-8">
        {/* header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">
                Welcome back! Here is a quick overview of your inventory.
              </p>
            </div>
          </div>
        </div>

        {/* key metrics */}
        <KeyMetrics
          totalProducts={totalProducts}
          totalValue={totalValue}
          lowStockProducts={lowStockProducts}
          weeklyProductsData={weeklyProductsData}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* stock levels */}
          <StockLevels recentProducts={recentProducts} />

          {/* Efficiency */}
          <Efficiency
            inStockPercentage={inStockPercentage}
            lowStockPercentage={lowStockPercentage}
            outOfStockPercentage={outOfStockPercentage}
          />
        </div>
      </main>
    </div>
  );
}
