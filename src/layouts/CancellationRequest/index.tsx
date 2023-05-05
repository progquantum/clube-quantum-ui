import ReactPaginate from 'react-paginate';

import { IoIosArrowBack, IoIosArrowRoundForward } from 'react-icons/io';

import { useTheme } from 'styled-components';

import { useState } from 'react';

import { DashboardLayout } from 'layouts/DashboardLayout';

import { InputSearch } from 'components/InputSearch';

import * as S from './styles';
import { Request as RequestType } from './Request/types';
import { Request } from './Request';
import { RequestInfo as RequestInfoType } from './RequestInfo/types';
import { RequestInfo } from './RequestInfo';

const requestOne = {
  name: 'Test User',
  id: '123',
  contractId: '456',
  requestDate: '05/05/2023',
  planName: 'Test Plan',
  birthDate: '05/05/2023',
  email: 'test@test.test',
  requestStatus: 'pending',
};

const requestTwo = {
  name: 'Test User',
  id: '456',
  contractId: '456',
  requestDate: '05/05/2023',
  planName: 'Test Plan',
  birthDate: '05/05/2023',
  email: 'test@test.test',
  requestStatus: 'pending',
};

const requestThree = {
  name: 'Test User',
  id: '789',
  contractId: '456',
  requestDate: '05/05/2023',
  planName: 'Test Plan',
  birthDate: '05/05/2023',
  email: 'test@test.test',
  requestStatus: 'pending',
};

const requests = [requestOne, requestTwo, requestThree];

const mockedRequestInfo = {
  contractName: 'Test Plan',
  contractDocumentKey: '123',
  contractType: 'Test Plan',
  birthDate: '05/05/2023',
  email: 'test@test.test',
  productName: 'Test Plan',
  phoneNumber: '999999999',
  areaCode: '99',
  monthlyFee: 44.9,
  acquisitionDate: '05/05/2023',
  cancellationJustification: 'teste',
};

export function CancellationRequestPage() {
  const [requestInfo, setRequestInfo] = useState<RequestInfoType | null>(
    mockedRequestInfo,
  );

  const { colors } = useTheme();
  const totalPages = 15;

  const onPageChange = () => {
    console.log('teste');
  };

  return (
    <DashboardLayout>
      <S.MainContainer>
        {!requestInfo ? (
          <RequestInfo requestInfo={mockedRequestInfo} />
        ) : (
          <>
            <InputSearch placeholder="Pesquisar por nome do usuário" />
            <S.Title>Solicitações de cancelamento</S.Title>
            <S.RequestsContainer>
              {requests.map((request: RequestType) => (
                <S.ClickableContainer
                  as="button"
                  onClick={() => setRequestInfo(null)}
                >
                  <Request key={request.id} request={request} />
                </S.ClickableContainer>
              ))}
            </S.RequestsContainer>
            <ReactPaginate
              breakLabel="..."
              nextLabel={
                <IoIosArrowRoundForward
                  size={20}
                  color={colors.mediumslateBlue}
                />
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
          </>
        )}
      </S.MainContainer>
    </DashboardLayout>
  );
}
