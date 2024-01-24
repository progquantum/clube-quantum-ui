import { Dayjs } from 'dayjs';
import _ from 'lodash';

export type FilterValues = {
  initialDate: Dayjs | null;
  finalDate: Dayjs | null;
  clientName: string;
};

export type WaitingQueueReportFilterProps = {
  filterValues: FilterValues;
  handleFilterValues: (filterValue: Record<string, string | Dayjs>) => void;
};
