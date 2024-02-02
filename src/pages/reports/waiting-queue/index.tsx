import { GetServerSideProps } from 'next';

import { WaitingQueueReportPage } from 'layouts/Report/WaitingQueueReport';

import { roles } from 'constants/roles';
import { withSSRAuth } from 'helpers/auth/withSSRAuth';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.admin.id, roles.user.id],
  },
);

export default function WaitingQueueReport() {
  return <WaitingQueueReportPage />;
}
