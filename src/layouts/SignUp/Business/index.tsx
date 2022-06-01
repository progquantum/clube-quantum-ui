import { useState } from 'react'
import Image from 'next/image'

import { Header } from 'components/Header'
import { Steper } from 'components/Steper'
import { Footer } from 'components/Footer'

import * as Step from './Steps'

import * as S from './styles'

export function BusinessSignUpPage () {
  const [step, setStep] = useState(0)

  function nextStep () {
    setStep((prevState) => prevState + 1)
  }

  function previousStep () {
    setStep((prevState) => prevState - 1)
  }

  return (
    <>
      <S.Container>
        <Header />

        <S.ContentsWrapper width={step <= 6 ? 5 : 0}>
          {step <= 6 && (
            <Steper currentStep={step} stepsNumber={7} />
          )}

          <S.Contents>
            {step === 0 && (
              <Image width={385} height={373} src='/images/business-one-step.png' alt='' />
            )}
            {step === 1 && (
              <Image width={385} height={373} src='/images/business-two-step.png' alt='' />
            )}
            {step === 2 && (
              <Image width={385} height={373} src='/images/business-two-step.png' alt='' />
            )}
            {step === 3 && (
              <Image width={385} height={373} src='/images/business-four-step.png' alt='' />
            )}
            {step === 4 && (
              <Image width={385} height={373} src='/images/business-five-step.png' alt='' />
            )}
            {step === 5 && (
              <Image width={385} height={373} src='/images/business-six-step.png' alt='' />
            )}
            {step === 7 && (
              <Image width={291} height={322} src='/images/successful-signup.png' alt='' />
            )}

            {step === 0 && (
              <Step.CnpjInput onUpdateFormStep={() => nextStep()} />
            )}
            {step === 1 && (
              <Step.PhoneNumberInput onUpdateFormStep={() => nextStep()} />
            )}
            {step === 2 && (
              <Step.PinCodeInput
                onNextFormStep={() => nextStep()}
                onPreviousFormStep={() => previousStep()}
              />
            )}
            {step === 3 && (
              <Step.BusinessDataInputs onUpdateFormStep={() => nextStep()} />
            )}
            {step === 4 && (
              <Step.AddressDataInputs onUpdateFormStep={() => nextStep()} />
            )}
            {step === 5 && (
              <Step.CardDataInputs onUpdateFormStep={() => nextStep()} />
            )}
            {step === 6 && (
              <Step.DataPlans onUpdateFormStep={() => nextStep()} />
            )}
            {step === 7 && (
              <Step.SuccessfulSignUp />
            )}
          </S.Contents>
        </S.ContentsWrapper>

      </S.Container>

      <Footer />
    </>
  )
}
