export enum ContractStatus {
  'running' = 'Pendente',
  'closed' = 'Finalizado',
  'canceled' = 'Cancelado',
}

export enum StatusEnum {
  'running' = 'yellow',
  'closed' = 'success',
  'canceled' = 'danger',
}

export type StatusProps = {
  status: string;
};
