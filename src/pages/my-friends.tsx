import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { MyFriendsPage } from 'layouts/MyFriends';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function MyFriends() {
  return <MyFriendsPage />;
}
