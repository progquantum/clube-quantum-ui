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
  const requests = [
    {
      name: 'Rafael Almeida',
      requestId: '09S8G13',
      requestDate: new Date(),
      productName: 'Contrato TIM 10GB',
      birthDate: new Date(),
      email: 'rafaelgaelteixeira@maptec.com',
      requestStatus: 'ACCEPTED',
    },
    {
      name: 'Rafael Almeida',
      requestId: '09S8G12',
      requestDate: new Date(),
      productName: 'Contrato TIM 10GB',
      birthDate: new Date(),
      email: 'rafaelgaelteixeira@maptec.com',
      requestStatus: 'DENIED',
    },
    {
      name: 'Rafael Almeida',
      requestId: '09S8G14',
      requestDate: new Date(),
      productName: 'Contrato TIM 10GB',
      birthDate: new Date(),
      email: 'rafaelgaelteixeira@maptec.com',
      requestStatus: 'ACCEPTED',
    },
  ];

  return <QuantumSmartRequestsPage requests={requests} isLoading={false} />;
}
