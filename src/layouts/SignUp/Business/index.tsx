import { useState } from 'react'
import Image from 'next/image'

import { Steper } from 'components/Steper'
import { Footer } from 'components/Footer'

import { ImageLoader } from './ImageLoader'
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
              <ImageLoader src='/images/business-one-step.png' alt='' />
            )}
            {step === 1 && (
              <ImageLoader src='/images/business-two-step.png' alt='' />
            )}
            {step === 2 && (
              <ImageLoader src='/images/business-two-step.png' alt='' />
            )}
            {step === 3 && (
              <ImageLoader src='/images/business-four-step.png' alt='' />
            )}
            {step === 4 && (
              <ImageLoader src='/images/business-five-step.png' alt='' />
            )}
            {step === 5 && (
              <ImageLoader src='/images/business-six-step.png' alt='' />
            )}
            {step === 7 && (
              <Image width={291} height={322} src='/images/successful-signup.png' alt='' />
            )}

            {step === 0 && (
              <Step.CNPJInput onUpdateFormStep={() => nextStep()} />
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
              <Step.CardDataInputs
                onUpdateFormStep={() => nextStep()}
                onNavigateToSuccessfulSignUp={() => navigateToSuccessfullSignUp()}
              />
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
