import { GetServerSideProps } from 'next';

import { DashboardLayout } from 'layouts/DashboardLayout';

import { AffliatePaymentLayout } from '../layouts/AffiliatePayment';
import { withSSRAuth } from '../helpers/auth/withSSRAuth';
import { roles } from '../constants/roles';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.admin.id],
  },
);

export default function AffliatePayments() {
  return (
    <DashboardLayout>
      <AffliatePaymentLayout />
    </DashboardLayout>
  );
}
