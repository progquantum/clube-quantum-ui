import { ResponseData } from 'hooks/useContracts/useCreateDocumentRequestSignaturePos/types';

export type Props = {
  onNextStep: () => void;
  contract: ResponseData;
};
