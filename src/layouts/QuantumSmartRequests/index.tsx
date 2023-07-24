import ReactPaginate from 'react-paginate';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useTheme } from 'styled-components';

import { useState } from 'react';

import { DashboardLayout } from 'layouts/DashboardLayout';

import { InputSearch } from 'components/InputSearch';
import { Loader } from 'components/Loader';

import * as S from './styles';
import { Request } from './types';
import { QuantumSmartRequest } from './QuantumSmartRequest';

import { Contract } from './QuantumSmartDetails/types';
import { QuantumSmartDetails } from './QuantumSmartDetails';

const contract = {
  name: 'Rafael Almeida',
  contractId: '09S8G12',
  birthDate: new Date(),
  email: 'rafaelgaelteixeira@maptec.com.br',
  requestStatus: '',
  product: {
    name: 'Plano TIM 10GB',
    phoneNumber: '9 9921 8371',
    areaCode: '44',
    value: 44.9,
    acquisitionDate: new Date(),
  },
};

export function QuantumSmartRequestsPage({
  requests,
  isLoading,
}: {
  requests: Request[];
  isLoading: boolean;
}) {
  const { colors } = useTheme();
  const [selectedRequest, setSelectedRequest] = useState<Contract | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const onPageChange = () => console.log(totalPages);

  const toggleSelectedContract = (contract: Contract) => {
    if (selectedRequest) setSelectedRequest(null);
    else setSelectedRequest(contract);
  };

  return (
    <DashboardLayout>
      <S.Container>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <S.InputSearchContainer>
              <InputSearch placeholder="Pesquisar por nome de usuário" />
            </S.InputSearchContainer>
            <S.List>
              {selectedRequest ? (
                <QuantumSmartDetails
                  contract={selectedRequest}
                  onRequestClose={toggleSelectedContract}
                />
              ) : (
                <>
                  <S.Title>Solicitações Smart</S.Title>
                  {requests.map((request: Request) => (
                    <S.ClickableContainer
                      key={request.requestId}
                      onClick={() => toggleSelectedContract(contract)}
                    >
                      <QuantumSmartRequest request={request} />
                    </S.ClickableContainer>
                  ))}
                </>
              )}
            </S.List>
          </>
        )}
        <S.PaginateContainer>
          <ReactPaginate
            breakLabel="..."
            nextLabel={
              <IoIosArrowForward size={20} color={colors.mediumslateBlue} />
            }
            onPageChange={onPageChange}
            pageCount={totalPages}
            previousLabel={
              <IoIosArrowBack size={20} color={colors.mediumslateBlue} />
            }
            containerClassName="paginationContainer"
            pageLinkClassName="pageLink"
            activeLinkClassName="activeLink"
          />
        </S.PaginateContainer>
      </S.Container>
    </DashboardLayout>
  );
}
