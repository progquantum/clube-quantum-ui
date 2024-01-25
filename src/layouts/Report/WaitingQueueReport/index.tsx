import { FiDownload } from 'react-icons/fi';
import { useState } from 'react';

import { DashboardLayout } from 'layouts/DashboardLayout';
import { Button } from 'components/Button';
import { useGetCreditCardWaitingQueue } from 'hooks/useBancoUmCreditCard/useGetCreditCardWaitingQueue';

import * as S from './styles';
import { WaitingQueueReportFilter } from './WaitingQueueReportFilter';
import { FilterValues } from './WaitingQueueReportFilter/types';
import { WaitingQueueTable } from './WaitingQueueTable';

export function WaitingQueueReportPage() {
  const [filterValues, setFilterValues] = useState<FilterValues>(
    {} as FilterValues,
  );

  const { data, handlePageChange, isLoading } =
    useGetCreditCardWaitingQueue(filterValues);

  const handleFilterValues = (filterValue: Record<string, string>) => {
    if (filterValue) {
      setFilterValues(prevState => ({ ...prevState, ...filterValue }));
    }
  };

  return (
    <DashboardLayout maxWidth="1436px">
      <S.ContentContainer>
        <S.TitleContainer>
          <S.Title>Lista de espera do cartão de crédito</S.Title>
          <Button>
            Download lista
            <FiDownload size={17} style={{ marginLeft: '0.5rem' }} />
          </Button>
        </S.TitleContainer>
        <WaitingQueueReportFilter
          filterValues={filterValues}
          handleFilterValues={handleFilterValues}
        />
        <WaitingQueueTable
          data={data}
          onPageChange={handlePageChange}
          isLoading={isLoading}
        />
      </S.ContentContainer>
    </DashboardLayout>
  );
}
