import { CommissionsExtract } from 'hooks/commissions/useGetCommissions/types';

export type Props = {
  loading: boolean;
  data: CommissionsExtract;
  onPageChange: (selectedItem: { selected: number }) => void;
};
