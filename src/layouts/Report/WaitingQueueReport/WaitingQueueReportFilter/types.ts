import { Dayjs } from 'dayjs';
import _ from 'lodash';

export type FilterValues = {
  startDate: string | null;
  endDate: string | null;
  searchName: string | null;
  status: string | null;
  itemsPerPage: string | null;
};

export type WaitingQueueReportFilterProps = {
  filterValues: FilterValues;
  handleFilterValues: (filterValue: Record<string, string | Dayjs>) => void;
};
