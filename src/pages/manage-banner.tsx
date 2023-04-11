import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { ManageBannerPage } from 'layouts/ManageBanner';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function ManageBanner() {
  return <ManageBannerPage />;
}
