import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { TimSubscriptionPlan } from 'layouts/TimSubscriptionPlan';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [],
  },
);

export default function MyFriends() {
  return <TimSubscriptionPlan />;
}
