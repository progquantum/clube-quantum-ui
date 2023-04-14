import { useState } from 'react';

import { useGetProductsOfPartnerById } from 'hooks/partners/usePartners';

import { CardBefore } from '../Components/CardBefore';
import { ConfirmPayment } from '../Components/ConfirmPayment';
import { ConfirmRegistration } from '../Components/ConfirmRegistration';
import { ContractSigning } from '../Components/ContractSigning';
import { PLan } from '../Components/Plan';
import { Success } from '../Components/Success';

export function PosFlow() {
  const [step, setStep] = useState(0);
  const { data: smart } = useGetProductsOfPartnerById(
    'da1cee85-714a-4842-a1ec-c3506fbf8e2f',
  );

  const nextStep = () => {
    setStep(prevState => prevState + 1);
  };

  const previousStep = () => {
    setStep(prevState => prevState - 1);
  };

  const steps = {
    0: <PLan onNextStep={nextStep} smart={smart} />,
    1: (
      <CardBefore
        onNextStep={nextStep}
        onPreviousStep={previousStep}
        smart={smart}
      />
    ),
    2: (
      <ConfirmRegistration
        onNextStep={nextStep}
        onPreviousStep={previousStep}
        smart={smart}
      />
    ),
    3: (
      <ConfirmPayment
        onNextStep={nextStep}
        onPreviousStep={previousStep}
        smart={smart}
      />
    ),
    4: <ContractSigning onNextStep={nextStep} />,
    5: <Success />,
  };

  const Component = steps[step];

  return Component;
}
