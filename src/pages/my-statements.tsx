import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { MyStatementsPage } from 'layouts/MyStatements';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function MyStatements() {
  return <MyStatementsPage />;
}
