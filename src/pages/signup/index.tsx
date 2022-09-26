import { GetServerSideProps } from 'next';

import { SignUpPage } from 'layouts/SignUp';
import { checkInviteCode } from 'services/resources';
import { INVITE_NOT_FOUND_PAGE } from 'constants/routesPath';

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const { invite } = ctx.query;

    if (!invite) {
      return {
        props: {},
      };
    }

    const { is_valid } = await checkInviteCode(invite);

    return {
      props: {
        is_valid,
      },
    };
  } catch {
    return {
      redirect: {
        destination: INVITE_NOT_FOUND_PAGE,
        permanent: false,
      },
    };
  }
};

export default function SignUp() {
  return <SignUpPage />;
}
