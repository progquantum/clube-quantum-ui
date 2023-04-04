import { ResponsePayload } from 'hooks/usePartners/types';

export type Props = {
  onNextStep: () => void;
  smart: ResponsePayload;
};
