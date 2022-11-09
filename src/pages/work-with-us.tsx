import { GetServerSideProps } from 'next';

import { WorkWithUsPage } from 'layouts/WorkWithUs';
import { withSSRGuest } from 'helpers/auth/withSSRGuest';

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async () => ({
    props: {},
  }),
);

export default function WorkWithUs() {
  return <WorkWithUsPage />;
}
