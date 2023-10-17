import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { DashboardAdmPage } from 'layouts/DashboardAdm';
import { roles } from 'constants/roles';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.admin.id],
  },
);

export default function DashboardAdm() {
  return <DashboardAdmPage />;
}
