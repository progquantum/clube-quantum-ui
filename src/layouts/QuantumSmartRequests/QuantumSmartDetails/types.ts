export type Contract = {
  name: string;
  contractId: string;
  birthDate: Date;
  email: string;
  requestStatus: string;
  product: {
    name: string;
    phoneNumber: string;
    areaCode: string;
    value: number;
    acquisitionDate: Date;
  };
};
