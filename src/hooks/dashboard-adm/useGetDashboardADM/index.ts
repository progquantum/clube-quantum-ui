import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { DashboardADM, DashboardAdmProps } from './types';

const QUERY_KEY_GET_DASHBOARD_ADM = 'get-dashboard-adm';

export async function getDashboardADM(payload?: DashboardAdmProps) {
  try {
    const { data } = await quantumClientQueue.get<DashboardADM>(
      '/dashboard-adm',
      {
        params: {
          ...(payload?.startDate ? { startDate: payload.startDate } : {}),
          ...(payload?.endDate ? { endDate: payload.endDate } : {}),
        },
      },
    );

    return data;
  } catch (err: unknown) {
    return Promise.reject(err);
  }
}

export function useGetDashboardADM({
  startDate,
  endDate,
}: DashboardAdmProps = {}) {
  // Usar valores serializados das datas para evitar problemas de referência
  const startDateString = startDate ? startDate.toISOString() : undefined;
  const endDateString = endDate ? endDate.toISOString() : undefined;

  const { data, isLoading, error } = useQuery(
    // Usar strings serializadas na chave de cache para evitar problemas de referência
    [QUERY_KEY_GET_DASHBOARD_ADM, startDateString, endDateString],
    () => getDashboardADM({ startDate, endDate }),
    {
      keepPreviousData: true,
      // Configurar o staleTime para evitar chamadas desnecessárias
      staleTime: 5 * 60 * 1000, // 5 minutos
      // Configurar o cacheTime para manter os dados em cache por mais tempo
      cacheTime: 30 * 60 * 1000, // 30 minutos
      // Desativar a refetch automática ao focar na janela
      refetchOnWindowFocus: false,
    },
  );

  return { data, isLoading, error };
}
