import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { DashboardAdmPage } from 'layouts/DashboardAdm';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function DashboardAdm() {
  return <DashboardAdmPage />;
}
