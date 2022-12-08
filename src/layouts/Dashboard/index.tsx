/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-nested-ternary */
import { ManagePlans } from 'components/ManagePlans';

import { useMe } from 'hooks/user/useMe';

import { DashboardLayout } from 'layouts/DashboardLayout';

import { MainContent } from './MainContent/Index';

export function DashboardPage() {
  const { data } = useMe();

  return (
    <>
      <title>Dashboard - Clube Quantum</title>
      <DashboardLayout>
        {data?.subscription ? <MainContent /> : <ManagePlans />}
      </DashboardLayout>
    </>
  );
}
