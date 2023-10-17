import { Contract } from 'hooks/useContracts/useFindContractByUserId/types';

export type Props = {
  onRequestModalContract?: () => void;
  contracts: Contract[];
  getSelectedContract: (contract: Contract) => void;
};
