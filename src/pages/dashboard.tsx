import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { DashboardPage } from 'layouts/Dashboard';
import { useMe } from 'hooks/user/useMe';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function Dashboard() {
  const { data } = useMe();

  return <DashboardPage data={data} />;
}
