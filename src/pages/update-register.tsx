import { GetServerSideProps } from 'next';

import { UpdateRegisterPage } from 'layouts/UpdateRegister';
import { withSSRAuth } from 'helpers/auth/withSSRAuth';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function UpdateRegister() {
  return <UpdateRegisterPage />;
}
