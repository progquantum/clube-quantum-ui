export type Request = {
  name: string;
  id: string;
  contractId: string;
  requestDate: string;
  planName: string;
  birthDate: string;
  email: string;
  requestStatus: 'verified' | 'canceled' | 'pending';
};

export type RequestProps = {
  request: Request;
};

export enum RequestStatusEnum {
  'verified' = 'Verificado',
  'canceled' = 'Cancelado',
  'pending' = 'Pendente',
}

export enum RequestStatusStyleEnum {
  'verified' = 'success',
  'canceled' = 'danger',
  'pending' = 'yellow',
}

export type RequestStatusProps = {
  status: keyof typeof RequestStatusEnum;
};
