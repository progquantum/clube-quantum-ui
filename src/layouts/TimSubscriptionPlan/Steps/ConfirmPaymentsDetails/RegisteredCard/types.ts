import { Wallet } from 'shared/types/apiSchema';

export type RegisteredCardProps = {
  getCVV: (cvv: string) => void;
  cvvValue: string;
  paymentInfo: Wallet;
};
