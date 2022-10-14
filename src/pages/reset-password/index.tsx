import { GetServerSideProps } from 'next';

import { withSSRGuest } from 'helpers/auth/withSSRGuest';
import { ResetPasswordPage } from 'layouts/ResetPassword';

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async () => ({
    props: {},
  }),
);

export default function ResetPassword() {
  return <ResetPasswordPage />;
}
