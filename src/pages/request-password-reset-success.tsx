import { GetServerSideProps } from 'next';

import { withSSRGuest } from 'helpers/auth/withSSRGuest';
import { RequestPasswordResetSuccessPage } from 'layouts/RequestPasswordResetSuccess';

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async ctx => {
    const { email } = ctx.query;

    if (!email) return { notFound: true };

    return {
      props: {},
    };
  },
);

export default function RequestPasswordResetSuccess() {
  return <RequestPasswordResetSuccessPage />;
}
