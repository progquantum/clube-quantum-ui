import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { GuestPage } from 'layouts/Guest';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function Guest() {
  return <GuestPage />;
}
