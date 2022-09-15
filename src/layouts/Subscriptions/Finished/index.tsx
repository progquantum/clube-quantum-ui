import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdAssignmentInd } from 'react-icons/md'
import Link from 'next/link'
import { useTheme } from 'styled-components'
import { AxiosError } from 'axios'

import { useSubscription } from 'hooks/useSubscription'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { SideBar } from 'components/SideBar'
import { Error } from 'components/Error'
import { Successful } from 'components/Successful'
import { BancoUm } from 'components/Illustrations/BancoUm'
import { CreditCardIcon } from 'components/Illustrations/CreditCard'
import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase'
import { formatPrice } from 'utils/formatters/formatPrice'
import { CREDIT_CARD_PAGE } from 'constants/routesPath'
import { useSubscriptionsState } from 'contexts/subscriptions/SubscriptionsContext'
import { error } from 'helpers/notify/error'
import { formatCreditCardRemoveSpace } from 'utils/formatters/formatCreditCard'

import { ErrorResponse } from './types'
import * as S from './styles'

export function FinishedPage () {
  const { handleSubmit, formState } = useForm({
    defaultValues: {
      plan: {
        plan_id: '',
        plan_duration: ''
      },
      bank_account: {
        current_account: '',
        current_account_check_number: '',
        holder_name: ''
      },
      credit_card: {
        card_name: '',
        card_number: '',
        expiration_date: '',
        cvc: ''
      }
    }
  })
  const { mutate: creatSubscription, isLoading: isCreating } =
    useSubscription()

  const { isSubmitting } = formState
  const isButtonDisabled = isSubmitting || isCreating
  const [isSuccessful, setIsSuccessful] = useState(false)
  const [isError, setIsError] = useState(false)
  const { colors } = useTheme()
  const { plan, bankAccount, creditCard } = useSubscriptionsState()

  function onSubmit () {
    creatSubscription(
      {
        plan: {
          plan_id: plan.plan_id,
          plan_duration: plan.plan_duration
        },
        bank_account: {
          current_account: bankAccount.current_account,
          current_account_check_number:
            bankAccount.current_account_check_number,
          holder_name: bankAccount.holder_name
        },
        credit_card: {
          card_name: creditCard.card_name,
          card_number: formatCreditCardRemoveSpace(creditCard.card_number),
          expiration_date: creditCard.expiration_date,
          cvc: creditCard.cvc
        }
      },
      {
        onSuccess: () => setIsSuccessful(true),
        onError: (err: AxiosError<ErrorResponse>) => {
          const userHasBankAccountError =
            err.response.data.statusCode === 409 &&
            err.response.data.message ===
              'This user already owns a bank account'

          const unexpectedError =
            err.response.status >= 400 &&
            err.response.status < 500 &&
            err.response.data.message !== 'This user already owns a bank account'

          if (userHasBankAccountError) {
            error('Este usuário já possui uma conta bancária cadastrada')
          }

          if (unexpectedError) {
            setIsError(true)
          }
        }
      }
    )
  }

  const formattedPlanName = formatFirstLetterToUppercase(plan?.plan_name)
  const planDuration = plan?.plan_duration === 6
    ? 'Semestral'
    : plan?.plan_duration === 1
      ? 'Mensal'
      : 'Anual'
  const formattedPrice = formatPrice(plan?.price)
  const holderName = bankAccount?.holder_name
  const cardName = creditCard?.card_name
  const cardNumber = creditCard?.card_number
  const cardCVC = creditCard?.cvc
  const expirationDate = creditCard?.expiration_date
  const formattedBankAccount = `${bankAccount?.current_account}-${bankAccount?.current_account_check_number}`
  return (
    <>
      <Header />
      <S.Main>
        {!isError
          ? (
            <>
              {!isSuccessful
                ? (
                  <>
                    <SideBar />
                    <S.Form onSubmit={handleSubmit(onSubmit)}>
                      <S.TitleFinished>Resumo da conta</S.TitleFinished>
                      <S.Plan>
                        <S.Title>
                          <MdAssignmentInd
                            size={19.87}
                            color={colors.mediumslateBlue}
                          />
                          Seu plano escolhido
                        </S.Title>
                        <S.TitlePlan>
                          {formattedPlanName}
                        </S.TitlePlan>
                        <S.CardDataContainer>
                          <S.CardDataTitle>Período de Cobrança</S.CardDataTitle>
                          <S.CardDataText>
                            {planDuration}
                          </S.CardDataText>
                        </S.CardDataContainer>
                        <S.CardDataContainer>
                          <S.CardDataTitle>Total</S.CardDataTitle>
                          <S.CardDataText>
                            {formattedPrice}
                          </S.CardDataText>
                        </S.CardDataContainer>
                      </S.Plan>
                      <S.Bank>
                        <S.Title>
                          <BancoUm
                            width='10.32'
                            height='15'
                            color={colors.mediumslateBlue}
                          />
                          Seu conta do Banco Um
                        </S.Title>
                        <S.CardDataContainer>
                          <S.CardDataTitle>Cód. Banco</S.CardDataTitle>
                          <S.CardDataText>396 - Banco Um</S.CardDataText>
                        </S.CardDataContainer>
                        <S.CardDataContainer>
                          <S.CardDataTitle>Agência</S.CardDataTitle>
                          <S.CardDataText>0001</S.CardDataText>
                        </S.CardDataContainer>
                        <S.CardDataContainer>
                          <S.CardDataTitle>Conta</S.CardDataTitle>
                          <S.CardDataText>
                            {formattedBankAccount}
                          </S.CardDataText>
                        </S.CardDataContainer>
                        <S.CardDataContainer>
                          <S.CardDataTitle>Titular</S.CardDataTitle>
                          <S.CardDataText>
                            {holderName}
                          </S.CardDataText>
                        </S.CardDataContainer>
                      </S.Bank>
                      <S.CreditCard>
                        <S.Title>
                          <CreditCardIcon
                            width='22'
                            height='16'
                            color={colors.mediumslateBlue}
                          />
                          Seu cartão cadastrado
                        </S.Title>
                        <S.CardDataContainer>
                          <S.CardDataTitle>Nome</S.CardDataTitle>
                          <S.CardDataText>{cardName}</S.CardDataText>
                        </S.CardDataContainer>
                        <S.CardDataContainer>
                          <S.CardDataTitle>Cartão</S.CardDataTitle>
                          <S.CardDataText>{cardNumber}</S.CardDataText>
                        </S.CardDataContainer>
                        <S.CardDataContainer>
                          <S.CardDataTitle>CVC</S.CardDataTitle>
                          <S.CardDataText>{cardCVC}</S.CardDataText>
                        </S.CardDataContainer>
                        <S.CardDataContainer>
                          <S.CardDataTitle>Validade</S.CardDataTitle>
                          <S.CardDataText>
                            {expirationDate}
                          </S.CardDataText>
                        </S.CardDataContainer>
                      </S.CreditCard>
                      <S.ConfirmButton
                        variant='primary'
                        type='submit'
                        loading={isCreating}
                        disabled={isButtonDisabled}
                      >
                        Finalizar
                      </S.ConfirmButton>
                      <Link href={CREDIT_CARD_PAGE}>
                        <S.ReturnButton variant='secondary' type='button'>
                          Voltar
                        </S.ReturnButton>
                      </Link>
                    </S.Form>
                  </>
                  )
                : (
                  <Successful
                    paragraph='Seu cadastro foi finalizado com sucesso!
                     Aproveite as ofertas e Cashback no Clube Quantum!'
                    textTitle='Seja bem vindo!'
                  />
                  )}
            </>
            )
          : (
            <Error />
            )}
      </S.Main>
      <Footer />
    </>
  )
}
