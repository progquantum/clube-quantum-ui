import { Contract } from 'hooks/useContracts/useFindContractByUserId/types';

export type Props = {
  onRequestModalContract?: () => void;
  contract: Contract;
  getSelectedContract: (contract: Contract) => void;
};

export type Status = 'canceled' | 'pending';

export type CancellationStatusProps = {
  status: Status;
};
