import React, { useState } from 'react';

import { Plans } from 'components/Plans';
import { Successful } from 'components/Successful';

import { CreditCard } from '../Forms/CreditCard';
import { PersonalAddress } from '../Forms/PersonalAddress';
import { IndividualPerson } from '../Forms/IndividualPerson';
import { PinCode } from '../Forms/PinCode';
import { Phone } from '../Forms/Phone';
import { CPF } from '../Forms/CPF';
import { BankAccount } from '../Forms/BankAccount';
import { SingUpButton } from '../SingUpButton';

export function PersonalSignUpPage() {
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
    0: <CPF onUpdateFormStep={nextStep} />,
    1: <Phone onUpdateFormStep={nextStep} onPreviousFormStep={previousStep} />,
    2: <PinCode onNextFormStep={nextStep} onPreviousFormStep={previousStep} />,
    3: (
      <IndividualPerson
        onUpdateFormStep={nextStep}
        onPreviousFormStep={previousStep}
      />
    ),
    4: (
      <PersonalAddress
        onUpdateFormStep={nextStep}
        onPreviousFormStep={previousStep}
      />
    ),
    5: (
      <CreditCard
        onUpdateFormStep={nextStep}
        onNavigateToSuccessfulSignUp={navigateToSuccessfullSignUp}
        onPreviousFormStep={previousStep}
      />
    ),
    6: (
      <BankAccount
        onUpdateFormStep={nextStep}
        onPreviousFormStep={previousStep}
      />
    ),
    7: <Plans button={<SingUpButton onUpdateFormStep={() => nextStep()} />} />,
    8: <Successful />,
  };

  const Component = stepsMapping[step];

  return Component;
}
