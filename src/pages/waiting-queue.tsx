import { GetServerSideProps } from 'next';

import { WaitingQueuePage } from 'layouts/WaitingQueue';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { roles } from 'constants/roles';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.user.id, roles.admin.id],
  },
);

export default function WaitingQueue() {
  return <WaitingQueuePage />;
}
