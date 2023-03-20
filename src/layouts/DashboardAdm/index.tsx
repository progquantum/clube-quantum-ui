import { DashboardLayout } from 'layouts/DashboardLayout';

import { Main } from './Main';

export function DashboardAdmPage() {
  return (
    <>
      <title>Dashboard Adm - Clube Quantum</title>
      <DashboardLayout maxWidth="1800px">
        <Main />
      </DashboardLayout>
    </>
  );
}
