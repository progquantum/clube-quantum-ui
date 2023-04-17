import { GetServerSideProps } from 'next';

import { UpdateUserAccountPage } from 'layouts/UpdateUserAccount';
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

export default function UpdateUserAccount() {
  return <UpdateUserAccountPage />;
}
