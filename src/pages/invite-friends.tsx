import { GetServerSideProps } from 'next';

import { InviteFriendsPage } from 'layouts/InviteFriends';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { roles } from 'constants/roles';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.user.id],
  },
);

export default function InviteFriend() {
  return <InviteFriendsPage />;
}
