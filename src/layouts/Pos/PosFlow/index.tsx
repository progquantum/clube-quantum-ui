import { useState } from 'react';

import { CardBefore } from '../Components/CardBefore';
import { ConfirmPayment } from '../Components/ConfirmPayment';
import { ConfirmRegistration } from '../Components/ConfirmRegistration';
import { ContractSigning } from '../Components/ContractSigning';
import { PLan } from '../Components/Plan';
import { Success } from '../Components/Success';

export function PosFlow() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(prevState => prevState + 1);
  };

  const previousStep = () => {
    setStep(prevState => prevState - 1);
  };

  const steps = {
    0: <PLan onNextStep={nextStep} />,
    1: <CardBefore onNextStep={nextStep} onPreviousStep={previousStep} />,
    2: (
      <ConfirmRegistration
        onNextStep={nextStep}
        onPreviousStep={previousStep}
      />
    ),
    3: <ConfirmPayment onNextStep={nextStep} onPreviousStep={previousStep} />,
    4: <ContractSigning onNextStep={nextStep} />,
    5: <Success />,
  };

  const Component = steps[step];

  return Component;
}
