/* eslint-disable no-case-declarations */
/* eslint-disable react/no-array-index-key */
import { FaDollarSign } from 'react-icons/fa';
import { BsPersonBadge, BsCart2 } from 'react-icons/bs';

import { useState } from 'react';

import ReactPaginate from 'react-paginate';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useTheme } from 'styled-components';

import dayjs from 'dayjs';

import { DashboardLayout } from 'layouts/DashboardLayout';

import { useGetCommissions } from 'hooks/commissions/useGetCommissions';

import { formatDate } from 'utils/formatters/formatDate';

import { formatPrice } from 'utils/formatters/formatPrice';

import { formatTruncateText } from 'utils/formatters/formatTruncateText';

import { Loader } from 'components/Loader';

import { useSidebarStore } from 'store/sidebar';

import * as S from './styles';

const indication = {
  name: 'Comissão de Amanda Martins',
  earningDate: new Date(2022, 1, 17),
  quantityGained: 1,
};

const indications = [indication, indication, indication, indication];

export function MyStatementsPage() {
  const { colors } = useTheme();
  const isSidebarExpanded = useSidebarStore(state => state.isExpanded);

  const [whichFilterButton, setWhichFilterButton] = useState<
    'lastMonth' | 'lastWeek' | 'today'
  >('today');
  const [seeFullName, setSeeFullName] = useState(null);
  const [initialDate, setInitialDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
  const { data, onPageChange, setPage, loading } = useGetCommissions({
    startDate: dayjs(initialDate).format('YYYY-MM-DD[T00:00:00]'),
    endDate: dayjs(finalDate).format('YYYY-MM-DD[T23:59:00]'),
  });
  const totalPages = data?.info.totalPages;

  const handleSelect = (option: string) => {
    const today = new Date();
    switch (option) {
      case 'today':
        setInitialDate(today);
        setFinalDate(today);
        setWhichFilterButton('today');
        setPage(1);
        break;
      case 'lastWeek':
        const startOfLastWeek = dayjs(today)
          .subtract(1, 'week')
          .startOf('week')
          .add(1, 'day')
          .toDate();
        const endOfLastWeek = dayjs(today)
          .subtract(1, 'week')
          .endOf('week')
          .add(1, 'day')
          .toDate();
        setInitialDate(startOfLastWeek);
        setFinalDate(endOfLastWeek);
        setWhichFilterButton('lastWeek');
        setPage(1);
        break;
      case 'lastMonth':
        const startOfLastMonth = dayjs(today)
          .subtract(1, 'month')
          .startOf('month')
          .toDate();
        const endOfLastMonth = dayjs(today)
          .subtract(1, 'month')
          .endOf('month')
          .toDate();
        setInitialDate(startOfLastMonth);
        setFinalDate(endOfLastMonth);
        setWhichFilterButton('lastMonth');
        setPage(1);
        break;
      default:
        setInitialDate(today);
        setFinalDate(today);
        setWhichFilterButton('today');
        break;
    }
  };
  return (
    <DashboardLayout maxWidth="1168px">
      <S.MyStatementsContainer isExpanded={isSidebarExpanded}>
        <S.MyStatementsHeader>
          Histórico de transações e cashback
        </S.MyStatementsHeader>
        <S.FilterContainer>
          <S.FilterButton
            onClick={() => handleSelect('lastMonth')}
            isSelected={whichFilterButton === 'lastMonth'}
          >
            Último mês
          </S.FilterButton>
          <S.FilterButton
            onClick={() => handleSelect('lastWeek')}
            isSelected={whichFilterButton === 'lastWeek'}
          >
            Última semana
          </S.FilterButton>
          <S.FilterButton
            onClick={() => handleSelect('today')}
            isSelected={whichFilterButton === 'today'}
          >
            Hoje
          </S.FilterButton>
        </S.FilterContainer>
        <div>
          <S.AccountBalanceContainer>
            <S.TitleContainer>
              <FaDollarSign size={30} />
              <span>Saldo em conta</span>
            </S.TitleContainer>
            <S.AccountBalanceValue>R$ 1.200,00</S.AccountBalanceValue>
            <S.TransferDateText>
              Será transferido em 15/xx/xxxx
            </S.TransferDateText>
          </S.AccountBalanceContainer>
          <S.EarningsHistoryByPartner>
            <S.TitleContainer>
              <BsPersonBadge size={30} />
              <span>Seu histórico de Ganhos por Parceiro</span>
            </S.TitleContainer>
            <S.EarningsHistorySubtitle>
              Saldo de cashback de compras por parceiro
            </S.EarningsHistorySubtitle>
            {loading ? (
              <div style={{ minWidth: '393px', height: '200px' }}>
                <Loader />
              </div>
            ) : (
              <>
                <S.TotalEarningText>
                  {formatPrice(
                    data?.totalAmount ? String(data?.totalAmount) : '0,00',
                  )}
                </S.TotalEarningText>
                <S.PartnerContainer>
                  {data?.commissions?.length === 0 && (
                    <div
                      style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      Sem histórico para esse período
                    </div>
                  )}
                  {data?.commissions?.map((partner, index) => (
                    <S.PartnerRow key={`${partner.cashback_name}-${index}`}>
                      <S.IconBox>
                        <BsCart2 size={20} />
                      </S.IconBox>
                      <div>
                        <S.PartnerName
                          style={{ cursor: 'pointer' }}
                          onClick={
                            seeFullName === index
                              ? () => setSeeFullName(null)
                              : () => setSeeFullName(index)
                          }
                        >
                          {seeFullName === index
                            ? partner.cashback_name
                            : formatTruncateText(partner.cashback_name, 34)}
                        </S.PartnerName>
                        <S.EarningDate>
                          {formatDate(partner.created_at)}
                        </S.EarningDate>
                      </div>
                      <S.QuantityGainedText>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(partner.amount)}
                      </S.QuantityGainedText>
                    </S.PartnerRow>
                  ))}
                </S.PartnerContainer>
                {totalPages > 1 && (
                  <S.PaginationContainer>
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
                  </S.PaginationContainer>
                )}
              </>
            )}
          </S.EarningsHistoryByPartner>
          <S.EarningsHistoryByIndication>
            <S.TitleContainer>
              <BsPersonBadge size={30} />
              <span>Seu histórico de Ganhos/Bônus por indicações</span>
            </S.TitleContainer>
            <S.EarningsHistorySubtitle>
              Saldo de Ganhos/Bonus por indicações
            </S.EarningsHistorySubtitle>
            <S.TotalEarningText>R$ 400,00</S.TotalEarningText>
            <S.PartnerContainer>
              {indications.map((indication: any) => (
                <S.PartnerRow>
                  <S.IconBox>
                    <BsCart2 size={20} />
                  </S.IconBox>
                  <div>
                    <S.PartnerName>{indication.name}</S.PartnerName>
                    <S.EarningDate>
                      {new Intl.DateTimeFormat('pt-BR').format(
                        indication.earningDate,
                      )}
                    </S.EarningDate>
                  </div>
                  <S.QuantityGainedText>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(indication.quantityGained)}
                  </S.QuantityGainedText>
                </S.PartnerRow>
              ))}
            </S.PartnerContainer>
            <S.PaginationContainer>
              <S.PaginationButton>Anterior</S.PaginationButton>
              <S.PaginationPages> 1 - 3 </S.PaginationPages>
              <S.PaginationButton>Próximo</S.PaginationButton>
            </S.PaginationContainer>
          </S.EarningsHistoryByIndication>
        </div>
      </S.MyStatementsContainer>
    </DashboardLayout>
  );
}
