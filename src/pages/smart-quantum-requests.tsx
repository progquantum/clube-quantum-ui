import { roles } from 'constants/roles';
import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import { QuantumSmartRequestsPage } from 'layouts/QuantumSmartRequests';

export const getServerSideProps = withSSRAuth(
  async () => ({
    props: {},
  }),
  {
    roles: [roles.admin.id],
  },
);

export default function QuantumSmartRequests() {
  return <QuantumSmartRequestsPage />;
}
