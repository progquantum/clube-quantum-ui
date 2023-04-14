import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { MyStatementsPage } from 'layouts/MyStatements';
import { roles } from 'constants/roles';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.user.id],
  },
);

export default function MyStatements() {
  return <MyStatementsPage />;
}
