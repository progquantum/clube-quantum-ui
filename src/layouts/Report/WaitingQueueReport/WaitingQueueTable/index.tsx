import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTheme } from 'styled-components';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { ImBlocked } from 'react-icons/im';
import { GrDeliver } from 'react-icons/gr';
import { MdOutlineCreditCardOff } from 'react-icons/md';

import { BancoUmCreditCard } from 'hooks/useBancoUmCreditCard/useGetCreditCardWaitingQueue/types';
import { Loader } from 'components/Loader';

import * as S from './styles';
import { WaitingQueueTableProps } from './types';

export function WaitingQueueTable({
  data,
  onPageChange,
  isLoading,
}: WaitingQueueTableProps) {
  const { colors } = useTheme();

  const isDataAvailable = !!data;

  const StatusBancoUmCreditCard: Record<string, string> = {
    AWAITING: 'Em espera',
    APPROVED: 'Aprovado',
    RECEIVED: 'Recebido',
    DENIED: 'Negado',
    CANCELED: 'Cancelado',
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
                      new Date(item.updated_at),
                    )}
                  </S.Content>
                  <S.Content>{StatusBancoUmCreditCard[item.status]}</S.Content>
                  <S.Content>
                    <S.ActionsContainer>
                      <GrDeliver
                        size={23}
                        color={colors.midnightBlue}
                        style={{ cursor: 'pointer' }}
                      />
                      <BsFillPersonCheckFill
                        size={23}
                        color={colors.successDark}
                        style={{ cursor: 'pointer' }}
                      />
                      <MdOutlineCreditCardOff
                        size={23}
                        color={colors.midnightBlue}
                        style={{ cursor: 'pointer' }}
                      />
                      <ImBlocked
                        size={23}
                        color={colors.danger}
                        style={{ cursor: 'pointer' }}
                      />
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
