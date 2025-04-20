export enum DateIntervalEnum {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  QUARTER = 'QUARTER',
  SEMESTER = 'SEMESTER',
  YEAR = 'YEAR',
}

type DateRangeData = { [key: string]: number };

export type DashboardADM = {
  client_per_plan: ClientsPerPlan;
  client_per_period: ClientsPerPeriod;
  monthly_revenue: MonthlyRevenue;
  billing_per_period: BillingPerPeriod;
  pos_sales_per_customer: PosSalesPerCustomer;
  quantum_billing: QuantumBilling;
};

export type QuantumBilling = {
  quantumBillingInDateRange: number;
  quantumBillingTotal: number;
};

export type ClientsPerPlan = {
  quantum_free: number;
  quantum_start: number;
  quantum_business: number;
  quantum_select: number;
  inactive: number;
  total_clients: number;
};

export type ClientsPerPeriod = {
  dateInterval: DateIntervalEnum;
  data: DateRangeData[];
};

export type MonthlyRevenue = {
  dateInterval: DateIntervalEnum;
  subscriptions: DateRangeData[];
  commissions: DateRangeData[];
  marketplaceSubscriptions: DateRangeData[];
};

export type BillingPerPeriod = {
  dateInterval: DateIntervalEnum;
  data: DateRangeData[];
};

export type PosSalesPerCustomer = {
  client_quantum: number;
  non_affiliated_client: number;
};

export type DashboardAdmProps = {
  startDate?: Date;
  endDate?: Date;
};
