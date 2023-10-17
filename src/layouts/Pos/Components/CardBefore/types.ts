import { ResponsePayload } from 'hooks/partners/usePartners/types';

export type Props = {
  onNextStep: () => void;
  onPreviousStep: () => void;
  smart: ResponsePayload;
};
