import { ResponsePayload } from 'hooks/usePartners/types';

export type Props = {
  onNextStep: () => void;
  onPreviousStep: () => void;
  smart: ResponsePayload;
};
