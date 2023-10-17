import { GetServerSideProps } from 'next';

import { DashboardPos } from 'layouts/DashboardPos';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { roles } from 'constants/roles';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.user.id],
  },
);

export default function DashboardPosPage() {
  return <DashboardPos />;
}
