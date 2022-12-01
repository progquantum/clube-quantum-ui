/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-nested-ternary */
import { Loader } from 'components/Loader';
import { ManagePlans } from 'components/ManagePlans';

import { useMe } from 'hooks/user/useMe';

import { DashboardLayout } from 'layouts/DashboardLayout';

import { MainContent } from './MainContent/Index';

export function DashboardPage() {
  const { data, isLoading } = useMe();

  return (
    <>
      <title>Dashboard - Clube Quantum</title>
      {isLoading ? (
        <Loader />
      ) : (
        <DashboardLayout>
          {data?.subscription ? <MainContent /> : <ManagePlans />}
        </DashboardLayout>
      )}
    </>
  );
}
