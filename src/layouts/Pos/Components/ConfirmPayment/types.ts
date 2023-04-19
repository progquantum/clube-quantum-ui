import { ResponsePayload } from 'hooks/partners/usePartners/types';
import { ResponseData } from 'hooks/useContracts/useCreateDocumentRequestSignaturePos/types';

export type Props = {
  onNextStep: () => void;
  onPreviousStep: () => void;
  smart: ResponsePayload;
  handleGetContractData: (contract: ResponseData) => void;
};
