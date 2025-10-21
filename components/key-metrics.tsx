import { TrendingUp } from 'lucide-react';
import ProductsChart from '@/components/products-chart';
import { IKeyMetricsProps } from '@/lib/types';

export default function KeyMetrics({
  totalProducts,
  totalValue,
  lowStockProducts,
  weeklyProductsData,
}: IKeyMetricsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-lg border border-gray-900 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Key Metrics</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-600">{totalProducts}</div>
            <div className="text-sm text-gray-600r">Total Products</div>
            <div className="flex items-center justify-center mt-1">
              <span className="text-green-600 text-xs">+{totalProducts}</span>
              <TrendingUp className="w-3 h-3 text-green-600 ml-1" />
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-600">{Number(totalValue).toFixed(0)}</div>
            <div className="text-sm text-gray-600r">Total Value</div>
            <div className="flex items-center justify-center mt-1">
              <span className="text-green-600 text-xs">+$ {Number(totalValue).toFixed(0)}</span>
              <TrendingUp className="w-3 h-3 text-green-600 ml-1" />
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-600">{lowStockProducts}</div>
            <div className="text-sm text-gray-600r">Total Stock</div>
            <div className="flex items-center justify-center mt-1">
              <span className="text-green-600 text-xs">+{lowStockProducts}</span>
              <TrendingUp className="w-3 h-3 text-green-600 ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Inventory over time */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-center">
          <h2>New products per week</h2>
        </div>
        <div className="h-48">
          <ProductsChart data={weeklyProductsData} />
        </div>
      </div>
    </div>
  );
}
