export type DashboardADM = {
  client_per_plan: ClientsPerPlan;
  client_per_day: ClientsPerDay;
  monthly_revenue: MonthlyRevenue;
};

export type ClientsPerPlan = {
  quantum_free: number;
  quantum_start: number;
  quantum_business: number;
  quantum_select: number;
  inactive: number;
  total_clients: number;
};

export type ClientsPerDay = {
  today: number;
  yesterday: number;
  dayBeforeYesterday: number;
  lastSevenDays: number;
};

export type MonthlyRevenue = {
  subscriptions: MonthlyRevenueProperty;
  commissions: MonthlyRevenueProperty;
  marketplaceSubscriptions: MonthlyRevenueProperty;
};

export type MonthlyRevenueProperty = {
  '2023-3': number;
  '2023-4': number;
  '2023-5': number;
  '2023-6': number;
  '2023-7': number;
  '2023-8': number;
};
