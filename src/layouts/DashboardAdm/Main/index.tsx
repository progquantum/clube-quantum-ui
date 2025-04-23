import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import { MdError, MdOutlineAttachMoney } from 'react-icons/md';

import { useSidebarStore } from 'store/sidebar';

import { useGetDashboardADM } from 'hooks/dashboard-adm/useGetDashboardADM';

import { formatPrice } from 'utils/formatters/formatPrice';

import { ClientsByPlanPieChart } from '../ClientsByPlanPieChart';
import { ClientsPerDayBarChart } from '../ClientsPerDayBarChart';
import { DailyBillingChart } from '../DailyBillingChart';
import { SalesByRevenueTypeLineChart } from '../SalesByRevenueTypeLineChart';
import { SmartQuantumSalesPieChart } from '../SmartQuantumSalesPieChart';

import { SimpleSelect } from './SimpleSelect';

import * as S from './styles';

export function Main() {
  const [underline, setUnderline] = useState('Geral');
  const [filter, setFilter] = useState<string>('período');
  const [selectedPeriod, setSelectedPeriod] =
    useState<string>('Desde o começo');
  const [startDate, setStartDate] = useState<Date>(
    new Date('2022-01-01T00:00:00'),
  );
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [dateError, setDateError] = useState<string>('');
  const isSideBarExpanded = useSidebarStore(state => state.isExpanded);

  // Memorizar as datas para evitar que novas instâncias sejam criadas a cada renderização
  const dates = useMemo(
    () => ({
      startDate,
      endDate,
    }),
    [startDate, endDate],
  );

  const { data: dashboard, isLoading, error } = useGetDashboardADM(dates);

  // Função para lidar com a seleção de período
  const handleSelect = (option: string) => {
    const today = new Date();
    let newStartDate: Date;
    let newEndDate: Date;

    switch (option) {
      case 'Hoje':
        newStartDate = today;
        newEndDate = today;
        break;
      case 'Ontem':
        newStartDate = dayjs(today).subtract(1, 'day').toDate();
        newEndDate = dayjs(today).subtract(1, 'day').toDate();
        break;
      case 'Essa semana':
        // Últimos 7 dias a partir de hoje
        newStartDate = dayjs(today).subtract(7, 'day').startOf('day').toDate();
        newEndDate = dayjs(today).endOf('day').toDate();
        break;
      case 'Mês passado':
        newStartDate = dayjs(today)
          .subtract(1, 'month')
          .startOf('month')
          .toDate();
        newEndDate = dayjs(today).subtract(1, 'month').endOf('month').toDate();
        break;
      case 'Último Ano':
        newStartDate = dayjs(today).subtract(1, 'year').toDate();
        newEndDate = today;
        break;
      case 'Desde o começo':
        newStartDate = new Date('2022-01-01T00:00:00');
        newEndDate = today;
        break;
      default:
        newStartDate = today;
        newEndDate = today;
        break;
    }

    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  const isByPeriodFilter = filter === 'período';

  const totalBilling =
    isLoading || error
      ? '0'
      : dashboard?.quantum_billing.quantumBillingTotal ?? '0';
  const billingInDateRange =
    isLoading || error
      ? '0'
      : dashboard?.quantum_billing.quantumBillingInDateRange ?? '0';
  const totalClients =
    isLoading || error ? '0' : dashboard?.client_per_plan.total_clients ?? '0';

  // Se houver erro, mostrar mensagem de erro
  if (error) {
    return (
      <S.Container isSideBarExpanded={isSideBarExpanded}>
        <S.ErrorMessage>
          Erro ao carregar dados. Por favor, tente novamente mais tarde.
        </S.ErrorMessage>
      </S.Container>
    );
  }

  return (
    <S.Container isSideBarExpanded={isSideBarExpanded}>
      <S.Head>
        <S.TitleAdm>Olá, Administrador</S.TitleAdm>
        <S.DivRow>
          <S.ButtonUnderline
            underline={underline === 'Geral'}
            variant="transparent"
            onClick={() => setUnderline('Geral')}
          >
            Visão Geral
          </S.ButtonUnderline>
          <S.ButtonUnderline
            underline={underline === 'Vendas'}
            variant="transparent"
            onClick={() => setUnderline('Vendas')}
          >
            Vendas
          </S.ButtonUnderline>

          {/* Filtros de data */}
          <div
            style={{
              marginLeft: '24px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <S.ButtonUnderline
              underline={isByPeriodFilter}
              variant="transparent"
              onClick={() => setFilter('período')}
            >
              Filtro por Período
            </S.ButtonUnderline>

            <div style={{ marginLeft: '16px', width: '200px' }}>
              <SimpleSelect
                placeholder="Selecione uma opção"
                options={[
                  { value: 'Hoje', label: 'Hoje' },
                  { value: 'Ontem', label: 'Ontem' },
                  { value: 'Essa semana', label: 'Essa semana' },
                  { value: 'Mês passado', label: 'Mês passado' },
                  { value: 'Último Ano', label: 'Último Ano' },
                  { value: 'Desde o começo', label: 'Desde o começo' },
                ]}
                value={selectedPeriod}
                onChange={event => {
                  setSelectedPeriod(event.target.value);
                  handleSelect(event.target.value);
                }}
              />
            </div>
            {dateError && (
              <div
                style={{
                  marginLeft: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#e74c3c',
                  fontSize: '14px',
                }}
              >
                <MdError style={{ marginRight: '4px' }} />
                {dateError}
              </div>
            )}
          </div>
        </S.DivRow>
      </S.Head>

      <S.Balance isSideBarExpanded={isSideBarExpanded}>
        <S.RowContent>
          <S.ContentBalance>
            <S.TitleBalance>
              <MdOutlineAttachMoney size={19.87} />
              Faturamento Quantum
            </S.TitleBalance>
            <S.ValueBalance>{formatPrice(String(totalBilling))}</S.ValueBalance>
          </S.ContentBalance>
          <S.ContentBalance>
            <S.TitleBalance>
              <MdOutlineAttachMoney size={19.87} />
              Faturamento Por Período
            </S.TitleBalance>
            <S.ValueBalance>
              {formatPrice(String(billingInDateRange))}
            </S.ValueBalance>
          </S.ContentBalance>
        </S.RowContent>
        <S.RowContent>
          <S.ContentBalance>
            <S.TitleBalance>
              <MdOutlineAttachMoney size={19.87} />
              Repasse ao cliente
            </S.TitleBalance>
            <S.ValueBalance>{formatPrice(`0`)}</S.ValueBalance>
          </S.ContentBalance>
          <S.ContentBalance>
            <S.TitleBalance>
              <MdOutlineAttachMoney size={19.87} />
              Total de cliente
            </S.TitleBalance>
            <S.ValueBalance>{totalClients}</S.ValueBalance>
          </S.ContentBalance>
        </S.RowContent>
      </S.Balance>
      <SalesByRevenueTypeLineChart
        monthlyRevenue={dashboard?.monthly_revenue}
      />
      <SmartQuantumSalesPieChart
        posSalesPerCustomer={dashboard?.pos_sales_per_customer}
      />
      <ClientsByPlanPieChart clientsPerPlan={dashboard?.client_per_plan} />
      {/* Passar explicitamente undefined quando estiver carregando ou quando os dados não existirem */}
      <DailyBillingChart
        dailyBilling={
          isLoading || !dashboard?.billing_per_period
            ? undefined
            : dashboard.billing_per_period
        }
      />
      <ClientsPerDayBarChart
        clientsPerDay={
          isLoading || !dashboard?.client_per_period
            ? undefined
            : dashboard.client_per_period
        }
      />
    </S.Container>
  );
}
