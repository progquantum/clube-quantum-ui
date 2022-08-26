import { useState } from 'react'
import Image from 'next/image'

import { Steper } from 'components/Steper'
import { Footer } from 'components/Footer'
import { Plans } from 'components/Plans'
import { Successful } from 'components/Successful'

import { CNPJ } from '../Forms/CNPJ'
import { Phone } from '../Forms/Phone'
import { PinCode } from '../Forms/PinCode'
import { LegalPerson } from '../Forms/LegalPerson'
import { BusinessAddress } from '../Forms/BusinessAddress'
import { BankCard } from '../Forms/BankCard'
import * as S from './styles'
import { SingUpButton } from '../SingUpButton'

export function BusinessSignUpPage () {
  const [step, setStep] = useState(0)

  function nextStep () {
    setStep((prevState) => prevState + 1)
  }

  function previousStep () {
    setStep((prevState) => prevState - 1)
  }

  function navigateToSuccessfullSignUp () {
    setStep((prevState) => prevState + 2)
  }

  return (
    <>
      <title>Cadastre-se - Clube Quantum</title>

      <S.Container>
        <S.ContentsWrapper width={step <= 6 ? 5 : 0}>
          {step <= 6 && (
            <Steper currentStep={step} stepsNumber={7} />
          )}

          <S.Contents>
            {step === 0 && (
              <Image
                width={385}
                height={373}
                src='/images/business-one-step.png'
                alt=''
              />
            )}
            {step === 1 && (
              <Image
                width={385}
                height={373}
                src='/images/business-two-step.png'
                alt=''
              />
            )}
            {step === 2 && (
              <Image
                width={385}
                height={373}
                src='/images/business-two-step.png'
                alt=''
              />
            )}
            {step === 3 && (
              <Image
                width={385}
                height={373}
                src='/images/business-four-step.png'
                alt=''
              />
            )}
            {step === 4 && (
              <Image
                width={385}
                height={373}
                src='/images/business-five-step.png'
                alt=''
              />
            )}
            {step === 5 && (
              <Image
                width={385}
                height={373}
                src='/images/business-six-step.png'
                alt=''
              />
            )}
            {step === 7 && (
              <Image
                width={291}
                height={322}
                src='/images/successful-signup.png'
                alt=''
              />
            )}

            {step === 0 && (
              // eslint-disable-next-line react/jsx-pascal-case
              <CNPJ onUpdateFormStep={() => nextStep()} />
            )}
            {step === 1 && (
              <Phone onUpdateFormStep={() => nextStep()} />
            )}
            {step === 2 && (
              <PinCode
                onNextFormStep={() => nextStep()}
                onPreviousFormStep={() => previousStep()}
              />
            )}
            {step === 3 && (
              <LegalPerson onUpdateFormStep={() => nextStep()} />
            )}
            {step === 4 && (
              <BusinessAddress onUpdateFormStep={() => nextStep()} />
            )}
            {step === 5 && (
              <BankCard
                onUpdateFormStep={() => nextStep()}
                onNavigateToSuccessfulSignUp={() => navigateToSuccessfullSignUp()}
              />
            )}
            {step === 6 && (
              <Plans button={<SingUpButton onUpdateFormStep={() => nextStep()} />} />
            )}
            {step === 7 && (
              <Successful />
            )}
          </S.Contents>
        </S.ContentsWrapper>
      </S.Container>
      <Footer />
    </>
  )
}
