import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import InputLabel from '@mui/material/InputLabel';
import _ from 'lodash';

import { useRef } from 'react';

import { InputSearch } from 'components/InputSearch';

import * as S from './styles';
import { WaitingQueueReportFilterProps } from './types';

export function WaitingQueueReportFilter({
  filterValues,
  handleFilterValues,
}: WaitingQueueReportFilterProps) {
  const debouncedHandler = _.debounce(handleFilterValues, 500);

  return (
    <S.FilterContainer>
      <S.InputContainer>
        <InputSearch
          placeholder="Buscar nome do cliente"
          type="text"
          name="clientName"
          variant="secondary"
          onChange={e =>
            debouncedHandler({
              searchName: e.target.value,
            })
          }
        />
      </S.InputContainer>
      <S.DatePickerContainer>
        <InputLabel
          style={{ marginBottom: '0.7rem', fontWeight: 600, width: '100%' }}
        >
          Data do pedido
        </InputLabel>
        <DatePicker
          label="Data início"
          sx={{ marginRight: '1.5rem' }}
          value={dayjs(filterValues.startDate)}
          disableFuture
          onChange={newValue =>
            debouncedHandler({
              startDate: newValue.toISOString(),
            })
          }
        />
        <DatePicker
          label="Data final"
          value={dayjs(filterValues.endDate)}
          disableFuture
          onChange={newValue =>
            debouncedHandler({
              endDate: newValue.toISOString(),
            })
          }
        />
      </S.DatePickerContainer>
    </S.FilterContainer>
  );
}
