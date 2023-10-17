import { GetServerSideProps } from 'next';

import { CancellationRequestPage } from 'layouts/CancellationRequest';
import { roles } from 'constants/roles';
import { withSSRAuth } from 'helpers/auth/withSSRAuth';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.admin.id],
  },
);

export default function CancellationRequest() {
  return <CancellationRequestPage />;
}
