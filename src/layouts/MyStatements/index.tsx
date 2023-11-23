import { FaDollarSign } from 'react-icons/fa';
import { useState } from 'react';
import dayjs from 'dayjs';

import { DashboardLayout } from 'layouts/DashboardLayout';
import { useGetCommissions } from 'hooks/commissions/useGetCommissions';
import { useSidebarStore } from 'store/sidebar';
import { useGetExtractByReferral } from 'hooks/commissions/useGetCommissionsByReferral';
import { formatPrice } from 'utils/formatters/formatPrice';

import * as S from './styles';
import { EarningsHistoryByPartner } from './EarningsHistoryByPartner';
import { EarningsHistoryByIndication } from './EarningsHistoryByIndication';

export function MyStatementsPage() {
  const isSidebarExpanded = useSidebarStore(state => state.isExpanded);

  const [whichFilterButton, setWhichFilterButton] = useState<
    'lastMonth' | 'currentMonth' | 'today'
  >('today');

  const [initialDate, setInitialDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
  const {
    data: byPartnerData,
    onPageChange: byPartnerOnPageChange,
    setPage: byPartnerSetPage,
    loading: byPartnerLoading,
  } = useGetCommissions({
    startDate: dayjs(initialDate).format('YYYY-MM-DD[T00:00:00]'),
    endDate: dayjs(finalDate).format('YYYY-MM-DD[T23:59:59]'),
  });

  const {
    data: byReferralData,
    onPageChange: byReferralOnPageChange,
    setPage: byReferralSetPage,
    loading: byReferralLoading,
  } = useGetExtractByReferral({
    startDate: dayjs(initialDate).format('YYYY-MM-DD[T00:00:00]'),
    endDate: dayjs(finalDate).format('YYYY-MM-DD[T23:59:00]'),
  });

  const totalAccountBalance =
    byReferralData && byPartnerData
      ? byReferralData.total_amount + byPartnerData.totalAmount
      : 0;

  const handleSelect = (option: string) => {
    const today = new Date();
    switch (option) {
      case 'today':
        setInitialDate(today);
        setFinalDate(today);
        setWhichFilterButton('today');
        byPartnerSetPage(1);
        byReferralSetPage(1);
        break;
      case 'currentMonth': {
        const firstDayOfMonth = dayjs().startOf('month');
        setInitialDate(firstDayOfMonth.toDate());
        setFinalDate(today);
        setWhichFilterButton('currentMonth');
        byPartnerSetPage(1);
        byReferralSetPage(1);
        break;
      }
      case 'lastMonth': {
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
        byPartnerSetPage(1);
        byReferralSetPage(1);
        break;
      }
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
            onClick={() => handleSelect('currentMonth')}
            isSelected={whichFilterButton === 'currentMonth'}
          >
            No mês
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
            <S.AccountBalanceValue>
              {formatPrice(String(totalAccountBalance))}
            </S.AccountBalanceValue>
            <S.TransferDateText>
              Será transferido em 15/xx/xxxx
            </S.TransferDateText>
          </S.AccountBalanceContainer>
          <EarningsHistoryByPartner
            loading={byPartnerLoading}
            onPageChange={byPartnerOnPageChange}
            data={byPartnerData}
          />
          <EarningsHistoryByIndication
            loading={byReferralLoading}
            data={byReferralData}
            onPageChange={byReferralOnPageChange}
          />
        </div>
      </S.MyStatementsContainer>
    </DashboardLayout>
  );
}
