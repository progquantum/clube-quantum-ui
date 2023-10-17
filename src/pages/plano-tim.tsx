import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { TimSubscriptionPlan } from 'layouts/TimSubscriptionPlan';
import { roles } from 'constants/roles';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.user.id],
  },
);

export default function MyFriends() {
  return <TimSubscriptionPlan />;
}
