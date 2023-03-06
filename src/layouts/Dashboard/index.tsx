import { ManagePlans } from 'components/ManagePlans';

import { User } from 'shared/types/apiSchema';
import { DashboardLayout } from 'layouts/DashboardLayout';

import { MainContent } from './MainContent/Index';

export function DashboardPage({ data }: { data: User }) {
  return (
    <>
      <title>Dashboard - Clube Quantum</title>
      <DashboardLayout>
        {data?.subscription ? <MainContent /> : <ManagePlans />}
      </DashboardLayout>
    </>
  );
}
