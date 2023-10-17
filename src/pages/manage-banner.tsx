import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { ManageBannerPage } from 'layouts/ManageBanner';
import { roles } from 'constants/roles';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.admin.id],
  },
);

export default function ManageBanner() {
  return <ManageBannerPage />;
}
