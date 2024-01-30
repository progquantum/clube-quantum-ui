import { Dayjs } from 'dayjs';

export type FilterValues = {
  startDate: string | null;
  endDate: string | null;
  searchName: string | null;
  status: string | null;
  itemsPerPage: string | null;
};

export type WaitingQueueReportFilterProps = {
  filterValues: FilterValues;
  resetForm: () => void;
  handleFilterValues: (filterValue: Record<string, string | Dayjs>) => void;
};
