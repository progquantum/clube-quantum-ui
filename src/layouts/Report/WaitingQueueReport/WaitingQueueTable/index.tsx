import ReactPaginate from 'react-paginate';
import Tooltip from '@mui/material/Tooltip';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTheme } from 'styled-components';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { ImBlocked } from 'react-icons/im';
import { GrDeliver } from 'react-icons/gr';
import { MdOutlineCreditCardOff } from 'react-icons/md';
import { useQueryClient } from 'react-query';

import { BancoUmCreditCard } from 'hooks/useBancoUmCreditCard/useGetCreditCardWaitingQueue/types';
import { QUERY_KEY_GET_CREDIT_CARD_WAITING_QUEUE } from 'hooks/useBancoUmCreditCard/useGetCreditCardWaitingQueue';
import { Loader } from 'components/Loader';
import { usePutCreditCardWaitingQueue } from 'hooks/useBancoUmCreditCard/usePutCreditCardWaitingQueue';
import { PutCreditCardWaitingQueueRequestBody } from 'hooks/useBancoUmCreditCard/usePutCreditCardWaitingQueue/types';

import * as S from './styles';
import { WaitingQueueTableProps } from './types';

export function WaitingQueueTable({
  data,
  onPageChange,
  isLoading,
}: WaitingQueueTableProps) {
  const { colors } = useTheme();
  const queryClient = useQueryClient();
  const { mutate: updateStatus } = usePutCreditCardWaitingQueue();
  const isDataAvailable = !!data;

  const StatusBancoUmCreditCard: Record<string, string> = {
    AWAITING: 'Em espera',
    APPROVED: 'Aprovado',
    RECEIVED: 'Recebido',
    DENIED: 'Negado',
    CANCELED: 'Cancelado',
  };

  const handleUpdateStatus = (
    requestBody: PutCreditCardWaitingQueueRequestBody,
  ) => {
    updateStatus(requestBody, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY_GET_CREDIT_CARD_WAITING_QUEUE);
      },
    });
  };

  return (
    <>
      <S.ScrollableContainer>
        <S.Table>
          <S.TableHeader>
            <S.TableLabelContainer>
              <S.Label>Nome</S.Label>
              <S.Label>CPF</S.Label>
              <S.Label>Data do pedido</S.Label>
              <S.Label>Status</S.Label>
              <S.Label>Ação</S.Label>
            </S.TableLabelContainer>
          </S.TableHeader>
          <S.ContentContainer>
            {isLoading && <Loader />}
            {!isLoading &&
              isDataAvailable &&
              data.bancoUmCreditCard.length === 0 && (
                <S.NoDataAvailable>Nenhum dado cadastrado</S.NoDataAvailable>
              )}
            {!isLoading &&
              isDataAvailable &&
              data.bancoUmCreditCard.map((item: BancoUmCreditCard) => (
                <S.ContentRow key={item.user_id}>
                  <S.Content>{item.name}</S.Content>
                  <S.Content>{item.doc}</S.Content>
                  <S.Content>
                    {new Intl.DateTimeFormat('pt-br').format(
                      new Date(item.created_at),
                    )}
                  </S.Content>
                  <S.Content>{StatusBancoUmCreditCard[item.status]}</S.Content>
                  <S.Content>
                    <S.ActionsContainer>
                      <Tooltip
                        title={
                          item.status === 'RECEIVED'
                            ? 'Ação Bloqueada'
                            : 'Declarar recebimento'
                        }
                      >
                        <div>
                          <GrDeliver
                            size={23}
                            color={
                              item.status === 'RECEIVED'
                                ? colors.gray[500]
                                : colors.midnightBlue
                            }
                            style={{ cursor: 'pointer' }}
                            onClick={
                              item.status === 'RECEIVED'
                                ? null
                                : () =>
                                    handleUpdateStatus({
                                      card_id: item.id,
                                      status: 'RECEIVED',
                                    })
                            }
                          />
                        </div>
                      </Tooltip>
                      <Tooltip
                        title={
                          item.status === 'APPROVED'
                            ? 'Ação Bloqueada'
                            : 'Aprovar'
                        }
                      >
                        <div>
                          <BsFillPersonCheckFill
                            size={23}
                            color={
                              item.status === 'APPROVED'
                                ? colors.gray[500]
                                : colors.successDark
                            }
                            style={{ cursor: 'pointer' }}
                            onClick={
                              item.status === 'APPROVED'
                                ? null
                                : () =>
                                    handleUpdateStatus({
                                      card_id: item.id,
                                      status: 'APPROVED',
                                    })
                            }
                          />
                        </div>
                      </Tooltip>
                      <Tooltip
                        title={
                          item.status === 'CANCELED'
                            ? 'Ação Bloqueada'
                            : 'Cancelar'
                        }
                      >
                        <div>
                          <MdOutlineCreditCardOff
                            size={23}
                            color={
                              item.status === 'CANCELED'
                                ? colors.gray[500]
                                : colors.midnightBlue
                            }
                            style={{ cursor: 'pointer' }}
                            onClick={
                              item.status === 'CANCELED'
                                ? null
                                : () =>
                                    handleUpdateStatus({
                                      card_id: item.id,
                                      status: 'CANCELED',
                                    })
                            }
                          />
                        </div>
                      </Tooltip>
                      <Tooltip
                        title={
                          item.status === 'DENIED' ? 'Ação Bloqueada' : 'Negar'
                        }
                      >
                        <div>
                          <ImBlocked
                            size={23}
                            color={
                              item.status === 'DENIED'
                                ? colors.gray[500]
                                : colors.danger
                            }
                            style={{ cursor: 'pointer' }}
                            onClick={
                              item.status === 'DENIED'
                                ? null
                                : () =>
                                    handleUpdateStatus({
                                      card_id: item.id,
                                      status: 'DENIED',
                                    })
                            }
                          />
                        </div>
                      </Tooltip>
                    </S.ActionsContainer>
                  </S.Content>
                </S.ContentRow>
              ))}
          </S.ContentContainer>
        </S.Table>
      </S.ScrollableContainer>
      <S.PaginationContainer>
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <IoIosArrowForward size={20} color={colors.mediumslateBlue} />
          }
          onPageChange={onPageChange}
          pageCount={data?.info.totalPages || 1}
          previousLabel={
            <IoIosArrowBack size={20} color={colors.mediumslateBlue} />
          }
          containerClassName="paginationContainer"
          pageLinkClassName="pageLink"
          activeLinkClassName="activeLink"
        />
      </S.PaginationContainer>
    </>
  );
}
