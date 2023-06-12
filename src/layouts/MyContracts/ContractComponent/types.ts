import { Contract } from 'hooks/useContracts/useFindContractByUserId/types';

export type Props = {
  onRequestModalContract?: () => void;
  contract: Contract;
  getSelectedContract: (contract: Contract) => void;
};

export type Status = 'APPROVED' | 'PENDING' | 'DENIED' | null;

export type CancellationStatusProps = {
  status: Status;
};
