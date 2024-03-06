import { CommissionsExtract } from 'hooks/commissions/useGetCommissions/types';

export type Props = {
  loading: boolean;
  isFetching: boolean;
  data: CommissionsExtract;
  onPageChange: (selectedItem: { selected: number }) => void;
};
