import { ResponseData } from 'hooks/commissions/useGetCommissionsByReferral/types';

export type Props = {
  loading: boolean;
  data: ResponseData;
  onPageChange: (selectedItem: { selected: number }) => void;
};
