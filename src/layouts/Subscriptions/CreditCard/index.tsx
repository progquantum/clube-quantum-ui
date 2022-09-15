import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'

import { SideBar } from 'components/SideBar'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { VISAIcon } from 'components/Illustrations/Visa'
import { CreditCardIcon } from 'components/Illustrations/CreditCard'
import { creditCardSchema } from 'schemas/subscription'
import { BANK_ACCOUNT_PAGE, FINISHED_SUBSCRIPTION, SUBSCRIPTIONS_PAGE } from 'constants/routesPath'
import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext'
import { formatCreditCardAddSpace } from 'utils/formatters/formatCreditCard'
import { formatCreditCardExpiration } from 'utils/formatters/formatCreditCardExpiration'
import { Input } from 'components/Input'

import { FormCreditCardData } from './types'
import * as S from './styles'

export function CreditCardPage () {
  const {
    control,
    handleSubmit,
    formState,
    register,
    setValue
  } = useForm<FormCreditCardData>({
    defaultValues: {
      card_name: '',
      card_number: '',
      expiration_date: '',
      cvc: ''
    },
    resolver: yupResolver(creditCardSchema)
  })
  const { isDirty, isSubmitting } = formState
  const isButtonDisabled = !isDirty || isSubmitting
  const router = useRouter()
  const { colors } = useTheme()
  const { registerCreditCard } = useSubscriptionsDispatch()

  const onSubmit: SubmitHandler<FormCreditCardData> = (data) => {
    registerCreditCard(data)
    router.push(FINISHED_SUBSCRIPTION)
  }

  return (
    <>
      <Header />
      <S.Main>
        <SideBar />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Line>
            <CreditCardIcon
              color={colors.gray[100]}
              width='22'
              height='16'
            />
            Seu cartão cadastrado
          </S.Line>
          <S.Text>
            Para poder tirar o máximo de proveito dos benefícios da plataforma,
            você precisa adicionar um cartão
          </S.Text>
          <S.DivInput>
            <Input
              label='Nome do Cartão'
              control={control}
              name='card_name'
              type='text'
              placeholder='Nome impresso no cartão'
            />
          </S.DivInput>
          <S.ContentCardNumber>
            <S.DivInput>
              <Input
                label='Número do Cartão'
                control={control}
                name='card_number'
                type='text'
                placeholder='0000 0000 0000 0000'
                {...register('card_number', {
                  onChange: (e) => {
                    setValue('card_number', formatCreditCardAddSpace(e.target.value))
                  }
                })}
              />
            </S.DivInput>
            <VISAIcon width='50' height='17.18' />
          </S.ContentCardNumber>
          <S.ContentCardExpirateCVC>
            <S.DivInput>
              <Input
                label='Data de Vencimento'
                control={control}
                name='expiration_date'
                type='text'
                placeholder='00/0000'
                {...register('expiration_date', {
                  onChange: (e) => {
                    setValue('expiration_date', formatCreditCardExpiration(e.target.value))
                  }
                })}
              />
            </S.DivInput>
            <S.CVC>
              <Input
                label='CVV'
                control={control}
                name='cvc'
                type='text'
                placeholder='000'
              />
            </S.CVC>
          </S.ContentCardExpirateCVC>
          <S.ConfirmButton
            variant='secondary_degrade'
            type='submit'
            disabled={isButtonDisabled}
          >
            Confirmar
          </S.ConfirmButton>
          <Link href={BANK_ACCOUNT_PAGE}>
            <S.ReturnButton
              variant='secondary'
            >
              Voltar
            </S.ReturnButton>
          </Link>
          <Link href={SUBSCRIPTIONS_PAGE}>
            <S.Cancel>Cancelar</S.Cancel>
          </Link>
        </S.Form>
      </S.Main>
      <Footer />
    </>
  )
}
