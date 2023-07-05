/* eslint-disable react/jsx-no-useless-fragment */
import ReactPaginate from 'react-paginate';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useTheme } from 'styled-components';

import { useState } from 'react';

import { DashboardLayout } from 'layouts/DashboardLayout';

import { InputSearch } from 'components/InputSearch';

import { useFindContractCancellation } from 'hooks/useContracts/useFindContractCancellation';

import { Loader } from 'components/Loader';

import { Request as RequestType } from './Request/types';
import { Request } from './Request';
import { RequestInfo as RequestInfoType } from './RequestInfo/types';
import { RequestInfo } from './RequestInfo';
import * as S from './styles';

export function CancellationRequestPage() {
  const [searchName, setSearchName] = useState('');
  const { data, onPageChange, totalPages, isLoading } =
    useFindContractCancellation({
      itemsPerPage: 3,
      searchName,
    });
  const [requestInfo, setRequestInfo] = useState<RequestInfoType | null>(null);

  const { colors } = useTheme();
  const [name, setName] = useState('');

  const handlerClick = () => {
    if (name) {
      setSearchName(name);
    }
  };

  const removeSelectedRequest = () => {
    setRequestInfo(null);
  };
  return (
    <DashboardLayout>
      <S.MainContainer>
        {requestInfo ? (
          <RequestInfo
            requestInfo={requestInfo}
            removeSelectedRequest={removeSelectedRequest}
          />
        ) : (
          <>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <InputSearch
                  name="search"
                  type="text"
                  placeholder="Pesquisar por nome do usuário"
                  value={name}
                  onChange={event => setName(event.target.value)}
                  onRequestClick={handlerClick}
                />
                <S.RequestsContainer>
                  <S.Title>Solicitações de cancelamento</S.Title>
                  {data?.requestCancellations?.map((request: RequestType) => (
                    <S.ClickableContainer
                      as="button"
                      onClick={() => setRequestInfo(request)}
                    >
                      <Request key={request.id} request={request} />
                    </S.ClickableContainer>
                  ))}
                  {totalPages > 1 && (
                    <ReactPaginate
                      breakLabel="..."
                      nextLabel={
                        <IoIosArrowForward
                          size={20}
                          color={colors.mediumslateBlue}
                        />
                      }
                      onPageChange={onPageChange}
                      pageCount={totalPages}
                      previousLabel={
                        <IoIosArrowBack
                          size={20}
                          color={colors.mediumslateBlue}
                        />
                      }
                      containerClassName="paginationContainer"
                      pageLinkClassName="pageLink"
                      activeLinkClassName="activeLink"
                    />
                  )}
                </S.RequestsContainer>
              </>
            )}
          </>
        )}
      </S.MainContainer>
    </DashboardLayout>
  );
}
