interface IChartData {
  week: string;
  products: number;
}
export interface IChartDataProps {
  data: IChartData[];
}

export interface IKeyMetricsProps {
  totalProducts: number;
  totalValue: number;
  lowStockProducts: number;
  weeklyProductsData: IChartData[];
}

export interface IEfficiencyProps {
  inStockPercentage: number;
  lowStockPercentage: number;
  outOfStockPercentage: number;
}

export interface IInventoryProps {
  searchParams: Promise<{ q?: string; page?: string }>;
}

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  searchParams: Record<string, string>;
}
