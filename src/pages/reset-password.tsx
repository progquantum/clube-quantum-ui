import { GetServerSideProps } from 'next';

import { withSSRGuest } from 'helpers/auth/withSSRGuest';
import { ResetPasswordPage } from 'layouts/ResetPassword';

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async ctx => {
    const { code } = ctx.query;

    if (!code) return { notFound: true };

    return {
      props: {},
    };
  },
);

export default function ResetPassword() {
  return <ResetPasswordPage />;
}
