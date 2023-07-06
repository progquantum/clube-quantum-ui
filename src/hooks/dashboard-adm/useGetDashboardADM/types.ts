export type DashboardADM = {
  client_per_plan: ClientsPerPlan;
};

export type ClientsPerPlan = {
  quantum_free: number;
  quantum_start: number;
  quantum_business: number;
  quantum_select: number;
  inactive: number;
  total_clients: number;
};
