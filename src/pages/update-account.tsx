import { GetServerSideProps } from 'next';

import { UpdateUserAccountPage } from 'layouts/UpdateUserAccount';
import { withSSRAuth } from 'helpers/auth/withSSRAuth';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function UpdateUserAccount() {
  return <UpdateUserAccountPage />;
}
