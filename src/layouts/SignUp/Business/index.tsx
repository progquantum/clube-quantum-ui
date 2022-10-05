import { useState } from 'react';

import { Plans } from 'components/Plans';
import { Successful } from 'components/Successful';

import { CNPJ } from '../Forms/CNPJ';
import { Phone } from '../Forms/Phone';
import { PinCode } from '../Forms/PinCode';
import { LegalPerson } from '../Forms/LegalPerson';
import { BusinessAddress } from '../Forms/BusinessAddress';
import { CreditCard } from '../Forms/CreditCard';
import { BankAccount } from '../Forms/BankAccount';

export function BusinessSignUpPage() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(prevState => prevState + 1);
  };

  const previousStep = () => {
    setStep(prevState => prevState - 1);
  };

  const navigateToSuccessfullSignUp = () => {
    setStep(prevState => prevState + 3);
  };

  const stepsMapping = {
    0: <CNPJ onUpdateFormStep={nextStep} />,
    1: <Phone onUpdateFormStep={nextStep} onPreviousFormStep={previousStep} />,
    2: <PinCode onNextFormStep={nextStep} onPreviousFormStep={previousStep} />,
    3: (
      <LegalPerson
        onUpdateFormStep={nextStep}
        onPreviousFormStep={previousStep}
      />
    ),
    4: (
      <BusinessAddress
        onUpdateFormStep={nextStep}
        onPreviousFormStep={previousStep}
      />
    ),
    5: (
      <CreditCard
        onPreviousFormStep={previousStep}
        onUpdateFormStep={nextStep}
        onNavigateToSuccessfulSignUp={navigateToSuccessfullSignUp}
      />
    ),
    6: (
      <BankAccount
        onUpdateFormStep={nextStep}
        onPreviousFormStep={previousStep}
      />
    ),
    7: <Plans onUpdateFormStep={nextStep} />,
    8: <Successful />,
  };

  const Component = stepsMapping[step];

  return Component;
}
