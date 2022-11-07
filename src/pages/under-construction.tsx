import { GetServerSideProps } from 'next';

import { UnderConstructionPage } from 'layouts/UnderConstruction';
import { withSSRGuest } from 'helpers/auth/withSSRGuest';

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async () => ({
    props: {},
  }),
);

export default function UnderConstruction() {
  return <UnderConstructionPage />;
}
