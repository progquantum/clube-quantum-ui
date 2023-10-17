import { AxiosError } from 'axios';

import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { DashboardADM } from './types';

const QUERY_KEY_GET_DASHBOARD_ADM = 'get-dashboard-adm';

export async function getDashboardADM() {
  try {
    const { data } = await quantumClientQueue.get<DashboardADM>(
      '/dashboard-adm',
    );

    return data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.log(err);
    }
    return Promise.reject(err);
  }
}

export function useGetDashboardADM() {
  return useQuery([QUERY_KEY_GET_DASHBOARD_ADM], getDashboardADM);
}
