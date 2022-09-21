import { useState } from 'react'
import Image from 'next/image'

import { Steper } from 'components/Steper'
import { Footer } from 'components/Footer'
import { Plans } from 'components/Plans'
import { Successful } from 'components/Successful'

import { CredCard } from '../Forms/CredCard'
import { PersonalAddress } from '../Forms/PersonalAddress'
import { IndividualPerson } from '../Forms/IndividualPerson'
import { PinCode } from '../Forms/PinCode'
import { Phone } from '../Forms/Phone'
import { CPF } from '../Forms/CPF'
import { LeftWrapper } from '../Forms/components/LeftWrapper'
import { BankAccount } from '../Forms/BankAccount'
import * as S from './styles'

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
        <S.ContentsWrapper width={step <= 7 ? 6 : 0}>
          {step <= 7 && (
            <Steper currentStep={step} stepsNumber={8} />
          )}

          <S.Contents>
            {step <= 4 && (
              <Image width={386} height={373} src='/images/girl-on-ladder.png' alt='' />
            )}

            {step === 5 && (
              <LeftWrapper
                title='Para esta etapa, precisamos que você informe o seu cartão de crédito para posterior escolha do seu plano.'
                paragraph='Você pode pular esta etapa, mas precisará cadastrar o seu cartão posteriormente para poder aderir a um plano e aproveitar todos os benefícios de um membro Quantum Clube.'
              />
            )}
            {step === 6 && (
              <LeftWrapper
                title='Para esta etapa, precisamos que você informe sua conta Banco Um. '
                paragraph='Você pode pular esta etapa, mas precisará cadastrar sua conta posteriormente para poder receber o seu cashback e aproveitar todos os benefícios de um membro Quantum Clube.'
              />
            )}

            {step === 8 && (
              <Image width={291} height={322} src='/images/successful-signup.png' alt='' />
            )}

            {step === 0 && (
              // eslint-disable-next-line react/jsx-pascal-case
              <CPF onUpdateFormStep={() => nextStep()} />
            )}

            {step === 1 && (
              <Phone
                onUpdateFormStep={() => nextStep()}
                onPreviousFormStep={() => previousStep()}
              />
            )}

            {step === 2 && (
              <PinCode
                onNextFormStep={() => nextStep()}
                onPreviousFormStep={() => previousStep()}
              />
            )}

            {step === 3 && (
              <IndividualPerson
                onUpdateFormStep={() => nextStep()}
                onPreviousFormStep={() => previousStep()}
              />
            )}

            {step === 4 && (
              <PersonalAddress
                onUpdateFormStep={() => nextStep()}
                onPreviousFormStep={() => previousStep()}
              />
            )}

            {step === 5 && (
              <CredCard
                onUpdateFormStep={() => nextStep()}
                onNavigateToSuccessfulSignUp={() => navigateToSuccessfullSignUp()}
                onPreviousFormStep={() => previousStep()}
              />
            )}
            {step === 6 && (
              <BankAccount
                onUpdateFormStep={() => nextStep()}
                onPreviousFormStep={() => previousStep()}
              />
            )}

            {step === 7 && (
              <Plans onUpdateFormStep={() => nextStep()} />
            )}

            {step === 8 && (
              <Successful />
            )}
          </S.Contents>
        </S.ContentsWrapper>
      </S.Container>
      <Footer />
    </>
  )
}
