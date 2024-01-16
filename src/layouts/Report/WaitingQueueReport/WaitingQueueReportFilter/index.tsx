import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import InputLabel from '@mui/material/InputLabel';
import _ from 'lodash';

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
              clientName: e.target.value,
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
          value={dayjs(filterValues.initialDate)}
          disableFuture
          onChange={newValue =>
            debouncedHandler({
              initialDate: newValue,
            })
          }
        />
        <DatePicker
          label="Data final"
          value={dayjs(filterValues.finalDate)}
          disableFuture
          onChange={newValue =>
            debouncedHandler({
              finalDate: newValue,
            })
          }
        />
      </S.DatePickerContainer>
    </S.FilterContainer>
  );
}
