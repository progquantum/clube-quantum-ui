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
import { CredCard } from '../Forms/CredCard'
import { BankAccount } from '../Forms/BankAccount'
import { LeftWrapper } from '../Forms/components/LeftWrapper'
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
        <S.ContentsWrapper width={step <= 7 ? 6 : 0}>
          {step <= 7 && (
            <Steper currentStep={step} stepsNumber={8} />
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
              <LegalPerson
                onUpdateFormStep={() => nextStep()}
                onPreviousFormStep={() => previousStep()}
              />
            )}
            {step === 4 && (
              <BusinessAddress
                onUpdateFormStep={() => nextStep()}
                onPreviousFormStep={() => previousStep()}
              />
            )}
            {step === 5 && (
              <CredCard
                onPreviousFormStep={() => previousStep()}
                onUpdateFormStep={() => nextStep()}
                onNavigateToSuccessfulSignUp={() => navigateToSuccessfullSignUp()}
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
