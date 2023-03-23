import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { PartnerRegistration } from 'layouts/PartnerRegistration';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function PartnerRegistrationPage() {
  return <PartnerRegistration />;
}
