import { GetServerSideProps } from 'next';

import { SubscriptionsPage } from 'layouts/Subscriptions';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function Subscriptions() {
  return <SubscriptionsPage />;
}
