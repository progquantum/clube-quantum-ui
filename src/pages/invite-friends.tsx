import { GetServerSideProps } from 'next';

import { InviteFriendsPage } from 'layouts/InviteFriends';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function InviteFriend() {
  return <InviteFriendsPage />;
}
