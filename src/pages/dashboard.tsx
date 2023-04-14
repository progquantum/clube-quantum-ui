import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { DashboardPage } from 'layouts/Dashboard';
import { useMe } from 'hooks/me/useMe';
import { roles } from 'constants/roles';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.user.id],
  },
);

export default function Dashboard() {
  const { data } = useMe();

  return <DashboardPage data={data} />;
}
