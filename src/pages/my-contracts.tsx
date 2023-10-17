import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { MyContracts } from 'layouts/MyContracts';
import { roles } from 'constants/roles';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.user.id],
  },
);

export default function MyContractsPage() {
  return <MyContracts />;
}
