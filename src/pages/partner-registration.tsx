import { GetServerSideProps } from 'next';

import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { PartnerRegistration } from 'layouts/PartnerRegistration';
import { roles } from 'constants/roles';

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.admin.id],
  },
);

export default function PartnerRegistrationPage() {
  return <PartnerRegistration />;
}
