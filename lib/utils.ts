// weekly Products Chart
export function WeeklyProducts(allProducts: any[]) {
  const now = new Date();
  const weeklyProductsData = [];
  for (let i = 11; i >= 0; i--) {
    const weekStart = new Date(now);
    weekStart.setDate(weekStart.getDate() - i * 7);
    weekStart.setHours(0, 0, 0, 0);

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    weekStart.setHours(23, 59, 59, 999);

    const weekLabel = `${String(weekStart.getMonth() + 1).padStart(2, '0')}/${String(
      weekStart.getDate() + 1,
    ).padStart(2, '0')}`;

    const weekProducts = allProducts.filter((product) => {
      const productDate = new Date(product.createdAt);
      return productDate >= weekStart && productDate <= weekEnd;
    });

    weeklyProductsData.push({
      week: weekLabel,
      products: weekProducts.length,
    });
  }

  return weeklyProductsData;
}

export function Stock({ allProducts, totalProducts }: any) {
  const inStockCount = allProducts.filter((p) => Number(p.quantity) > 5).length;
  const lowStockCount = allProducts.filter(
    (p) => Number(p.quantity) <= 5 && Number(p.quantity) >= 1,
  ).length;
  const outOfStockCount = allProducts.filter((p) => Number(p.quantity) === 0).length;
  const inStockPercentage =
    totalProducts > 0 ? Math.round((inStockCount / totalProducts) * 100) : 0;
  const lowStockPercentage =
    totalProducts > 0 ? Math.round((lowStockCount / totalProducts) * 100) : 0;
  const outOfStockPercentage =
    totalProducts > 0 ? Math.round((outOfStockCount / totalProducts) * 100) : 0;

  return { inStockPercentage, lowStockPercentage, outOfStockPercentage };
}

export function CalcTotalValue(allProducts: any[]) {
  return allProducts.reduce(
    (sum, product) => sum + Number(product.price) * Number(product.quantity),
    0,
  );
}
