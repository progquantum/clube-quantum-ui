import { User } from 'shared/types/apiSchema';
import { DashboardLayout } from 'layouts/DashboardLayout';

import { Loader } from 'components/Loader';

import { MainContent } from './MainContent/Index';

export function DashboardPage({
  data,
  isLoading,
}: {
  data: User;
  isLoading: boolean;
}) {
  return (
    <>
      <title>Dashboard - Clube Quantum</title>
      <DashboardLayout>
        {isLoading ? <Loader /> : <MainContent data={data} />}
      </DashboardLayout>
    </>
  );
}
