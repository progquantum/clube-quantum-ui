import { GetServerSideProps } from 'next';

import { StoreDetails } from 'layouts/StoreDetails';

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

export default function StoreDetailsPage() {
  return <StoreDetails />;
}
