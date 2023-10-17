import { GetServerSideProps } from 'next';

import { BusinessSignUpPage } from 'layouts/SignUp/Business';
import { withSSRGuest } from 'helpers/auth/withSSRGuest';

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async () => ({
    props: {},
  }),
);

export default function PersonalSignUp() {
  return <BusinessSignUpPage />;
}
