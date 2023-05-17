import { GetServerSideProps } from 'next';

import { PersonalSignUpPage } from 'layouts/SignUp/Personal';
import { withSSRGuest } from 'helpers/auth/withSSRGuest';

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async () => ({
    props: {},
  }),
);

export default function PersonalSignUp() {
  return <PersonalSignUpPage />;
}
