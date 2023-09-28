import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTheme } from 'styled-components';
import { useState } from 'react';

import { DashboardLayout } from 'layouts/DashboardLayout';
import { useGetSubscriptionsQuantumSmart } from 'hooks/subscriptions/useSubscriptionQuantumSmartRequest';
import { MarketplaceSubscription } from 'hooks/subscriptions/useSubscriptionQuantumSmartRequest/types';
import { InputSearch } from 'components/InputSearch';
import { Loader } from 'components/Loader';

import * as S from './styles';
import { QuantumSmartRequest } from './QuantumSmartRequest';

import { QuantumSmartDetails } from './QuantumSmartDetails';

export function QuantumSmartRequestsPage() {
  const { colors } = useTheme();
  const [searchName, setSearchName] = useState('');
  const [name, setName] = useState('');
  const {
    data: requests,
    loading,
    onPageChange,
  } = useGetSubscriptionsQuantumSmart(searchName);

  const [selectedRequest, setSelectedRequest] =
    useState<MarketplaceSubscription | null>(null);

  const toggleSelectedContract = (contract: MarketplaceSubscription) => {
    if (selectedRequest) setSelectedRequest(null);
    else setSelectedRequest(contract);
  };

  const totalPages = requests?.info.totalPages;

  return (
    <DashboardLayout>
      <S.Container>
        <S.InputSearchContainer>
          <InputSearch
            placeholder="Pesquisar por nome de usuário"
            onChange={e => setName(e.target.value)}
            onRequestClick={() => setSearchName(name)}
          />
        </S.InputSearchContainer>
        <S.Title>Solicitações Smart</S.Title>
        {loading ? (
          <Loader />
        ) : (
          <S.List>
            {selectedRequest ? (
              <QuantumSmartDetails
                request={selectedRequest}
                onRequestClose={toggleSelectedContract}
              />
            ) : (
              <>
                {requests.marketplaceSubscriptions.map(
                  (request: MarketplaceSubscription) => (
                    <S.ClickableContainer
                      key={request.id}
                      onClick={() => toggleSelectedContract(request)}
                    >
                      <QuantumSmartRequest request={request} />
                    </S.ClickableContainer>
                  ),
                )}
              </>
            )}
          </S.List>
        )}
        {requests?.marketplaceSubscriptions.length === 0 && (
          <S.EmptyData>Nenhuma solicitação encontrada</S.EmptyData>
        )}
        {requests?.marketplaceSubscriptions.length > 0 && (
          <S.InvisibleContainer isRequestSelected={!!selectedRequest}>
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
          </S.InvisibleContainer>
        )}
      </S.Container>
    </DashboardLayout>
  );
}
