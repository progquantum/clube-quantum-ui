import { Contract } from 'hooks/useContracts/useFindContractByUserId/types';

export type Props = {
  onRequestClose: () => void;
  contract: Contract;
};
