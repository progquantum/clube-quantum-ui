import { GetServerSideProps } from 'next';

import { ManagePaymentPage } from 'layouts/ManagePayment';
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

export default function ManagePayment() {
  return <ManagePaymentPage />;
}
