import { Contract } from 'hooks/useContracts/useFindContractByUserId/types';

export type Props = {
  onRequestModalContract?: () => void;
  contract: Contract;
};
