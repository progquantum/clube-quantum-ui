import { DatePicker } from '@mui/x-date-pickers';
import InputLabel from '@mui/material/InputLabel';
import _ from 'lodash';

import { InputSearch } from 'components/InputSearch';
import { Button } from 'components/Button';

import * as S from './styles';
import { WaitingQueueReportFilterProps } from './types';

export function WaitingQueueReportFilter({
  filterValues,
  handleFilterValues,
  resetForm,
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
          defaultValue={filterValues.searchName}
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
          value={filterValues.startDate}
          disableFuture
          onChange={newValue =>
            debouncedHandler({
              startDate: new Date(newValue).toISOString(),
            })
          }
        />
        <DatePicker
          label="Data final"
          value={filterValues.endDate}
          disableFuture
          onChange={newValue =>
            debouncedHandler({
              endDate: new Date(newValue).toISOString(),
            })
          }
        />
      </S.DatePickerContainer>
      <Button
        style={{
          maxWidth: '100px',
          maxHeight: '40px',
          alignSelf: 'center',
        }}
        onClick={resetForm}
      >
        Limpar
      </Button>
    </S.FilterContainer>
  );
}
