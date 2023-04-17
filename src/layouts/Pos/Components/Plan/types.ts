import { ResponsePayload } from 'hooks/partners/usePartners/types';

export type Props = {
  onNextStep: () => void;
  smart: ResponsePayload;
};
