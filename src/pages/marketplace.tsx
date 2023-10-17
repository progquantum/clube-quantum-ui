import { GetServerSideProps } from 'next';

import { useRef } from 'react';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { Marketplace } from 'layouts/Marketplace';
import { roles } from 'constants/roles';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.user.id, roles.admin.id],
  },
);

export default function MarketplacePage() {
  const observerTarget = useRef(null);
  return (
    <div>
      <Marketplace observerTargetRef={observerTarget} />
      <div ref={observerTarget} style={{ height: '10px' }} />
    </div>
  );
}
