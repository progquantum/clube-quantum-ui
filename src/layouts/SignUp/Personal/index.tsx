import { useState } from 'react'
import Image from 'next/image'

import { Steper } from 'components/Steper'
import { Footer } from 'components/Footer'
import { Plans } from 'components/Plans'
import { Successful } from 'components/Successful'

import { BankCard } from '../Forms/BankCard'
import { PersonalAddress } from '../Forms/PersonalAddress'
import { IndividualPerson } from '../Forms/IndividualPerson'
import { PinCode } from '../Forms/PinCode'
import { Phone } from '../Forms/Phone'
import { CPF } from '../Forms/CPF'
import * as S from './styles'
import { SingUpButton } from '../SingUpButton'

export function PersonalSignUpPage () {
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
            {step <= 4 && (
              <Image width={386} height={373} src='/images/girl-on-ladder.png' alt='' />
            )}

            {step === 5 && (
              <Image width={401} height={634} src='/images/six-step-image.png' alt='' />
            )}

            {step === 7 && (
              <Image width={291} height={322} src='/images/successful-signup.png' alt='' />
            )}

            {step === 0 && (
              // eslint-disable-next-line react/jsx-pascal-case
              <CPF onUpdateFormStep={() => nextStep()} />
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
              <IndividualPerson onUpdateFormStep={() => nextStep()} />
            )}

            {step === 4 && (
              <PersonalAddress onUpdateFormStep={() => nextStep()} />
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
