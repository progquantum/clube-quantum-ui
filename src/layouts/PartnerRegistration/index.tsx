import { DashboardLayout } from 'layouts/DashboardLayout';
import { usePartnerStore } from 'store/partner-registration';

import { DescriptionEstablishment } from './DescriptionEstablishment';
import { InfoEstablishment } from './InfoEstablishment';
import { Summary } from './Summary';

import { Container } from './styles';

export function PartnerRegistration() {
  const currentStep = usePartnerStore(state => state.currentStep);

  const Steps = {
    0: <InfoEstablishment />,
    1: <DescriptionEstablishment />,
    2: <Summary />,
  };

  const component = Steps[currentStep];
  return (
    <DashboardLayout>
      <Container>{component}</Container>
    </DashboardLayout>
  );
}
