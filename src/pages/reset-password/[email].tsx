import { GetServerSideProps } from 'next';

import { useRouter } from 'next/router';

import { withSSRGuest } from 'helpers/auth/withSSRGuest';
import { SuccessRequestPage } from 'layouts/ResetPassword/SuccessRequest';

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async () => ({
    props: {},
  }),
);

export default function ResetPassword() {
  const router = useRouter();
  const { email } = router.query;
  return <SuccessRequestPage email={email} />;
}
