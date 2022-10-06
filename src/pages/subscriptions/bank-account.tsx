import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { BankAccountPage } from 'layouts/Subscriptions/BankAccount';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function BankAccount() {
  return <BankAccountPage />;
}
