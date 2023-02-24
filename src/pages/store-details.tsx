import { GetServerSideProps } from 'next';

import { StoreDetails } from 'layouts/StoreDetails';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function StoreDetailsPage() {
  return <StoreDetails />;
}
