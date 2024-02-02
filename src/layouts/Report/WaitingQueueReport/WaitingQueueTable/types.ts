import { GetCreditCardWaitingQueueResponseData } from 'hooks/useBancoUmCreditCard/useGetCreditCardWaitingQueue/types';

export type WaitingQueueTableProps = {
  data: GetCreditCardWaitingQueueResponseData;
  onPageChange: (page: { selected: number }) => void;
  isLoading: boolean;
};
