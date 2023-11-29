import { useState } from 'react';
import { MdOutlineAttachMoney } from 'react-icons/md';

import { useSidebarStore } from 'store/sidebar';

import { useGetDashboardADM } from 'hooks/dashboard-adm/useGetDashboardADM';

import { formatPrice } from 'utils/formatters/formatPrice';

import * as S from './styles';
import { SalesByRevenueTypeLineChart } from '../SalesByRevenueTypeLineChart';
import { SmartQuantumSalesPieChart } from '../SmartQuantumSalesPieChart';
import { ClientsByPlanPieChart } from '../ClientsByPlanPieChart';
import { DailyBillingChart } from '../DailyBillingChart';
import { ClientsPerDayBarChart } from '../ClientsPerDayBarChart';

export function Main() {
  const [underline, setUnderline] = useState('Geral');
  const isSideBarExpanded = useSidebarStore(state => state.isExpanded);
  const { data: dashboard } = useGetDashboardADM();

  const totalBilling = dashboard?.quantum_billing.quantumBillingTotal ?? '0';
  const todayBilling = dashboard?.quantum_billing.quantumBillingToday ?? '0';

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
              Faturamento Diário
            </S.TitleBalance>
            <S.ValueBalance>{formatPrice(String(todayBilling))}</S.ValueBalance>
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
            <S.ValueBalance>
              {dashboard.client_per_plan.total_clients}
            </S.ValueBalance>
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
      <DailyBillingChart dailyBilling={dashboard?.daily_billing} />
      <ClientsPerDayBarChart clientsPerDay={dashboard?.client_per_day} />
    </S.Container>
  );
}
