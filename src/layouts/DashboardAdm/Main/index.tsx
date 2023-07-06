import { useState } from 'react';
import { MdOutlineAttachMoney } from 'react-icons/md';

import { useSidebarStore } from 'store/sidebar';

import { useGetDashboardADM } from 'hooks/dashboard-adm/useGetDashboardADM';

import { ClientsPerPlan } from 'hooks/dashboard-adm/useGetDashboardADM/types';

import * as S from './styles';
import { SalesByRevenueTypeLineChart } from '../SalesByRevenueTypeLineChart';
import { SmartQuantumSalesPieChart } from '../SmartQuantumSalesPieChart';
import { ClientsByPlanPieChart } from '../ClientsByPlanPieChart';
import { DailyBillingChart } from '../DailyBillingChart';
import { ClientsByDayBarChart } from '../ClientsByDayBarChart';

export function Main() {
  const [underline, setUnderline] = useState('Geral');
  const isSideBarExpanded = useSidebarStore(state => state.isExpanded);
  const { data: dashboard } = useGetDashboardADM();

  const fallbackData = {
    quantum_free: 0,
    quantum_start: 0,
    quantum_business: 0,
    quantum_select: 0,
    inactive: 0,
    total_clients: 0,
  };

  const clientsPerPlan: ClientsPerPlan =
    dashboard?.client_per_plan ?? fallbackData;

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
            <S.ValueBalance>R$ 1.200.000,00</S.ValueBalance>
          </S.ContentBalance>
          <S.ContentBalance>
            <S.TitleBalance>
              <MdOutlineAttachMoney size={19.87} />
              Faturamento Diário
            </S.TitleBalance>
            <S.ValueBalance>R$ 1.200.000,00</S.ValueBalance>
          </S.ContentBalance>
        </S.RowContent>
        <S.RowContent>
          <S.ContentBalance>
            <S.TitleBalance>
              <MdOutlineAttachMoney size={19.87} />
              Repasse ao cliente
            </S.TitleBalance>
            <S.ValueBalance>R$ 1.200.000,00</S.ValueBalance>
          </S.ContentBalance>
          <S.ContentBalance>
            <S.TitleBalance>
              <MdOutlineAttachMoney size={19.87} />
              Total de cliente
            </S.TitleBalance>
            <S.ValueBalance>1.229 Clientes</S.ValueBalance>
          </S.ContentBalance>
        </S.RowContent>
      </S.Balance>
      <SalesByRevenueTypeLineChart />
      <SmartQuantumSalesPieChart />
      <ClientsByPlanPieChart clientsPerPlan={clientsPerPlan} />
      <DailyBillingChart />
      <ClientsByDayBarChart />
    </S.Container>
  );
}
