import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'

import { SideBar } from 'components/SideBar'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { BancoUm } from 'components/Illustrations/BancoUm'
import { bankAccountSchema } from 'schemas/createSubscription'
import { formatBankAccount } from 'utils/formatters/formatBankAccount'
import { CREDIT_CARD_PAGE, SUBSCRIPTIONS_PAGE } from 'constants/routesPath'
import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext'

import { FormAccountData } from './types'
import * as S from './styles'

export function BankAccountPage () {
  const {
    control,
    handleSubmit,
    formState,
    register,
    setValue
  } = useForm<FormAccountData>({
    defaultValues: {
      current_account: '',
      holder_name: ''
    },
    resolver: yupResolver(bankAccountSchema)
  })
  const { isDirty, isSubmitting } = formState
  const isButtonDisabled = !isDirty || isSubmitting
  const router = useRouter()
  const { colors } = useTheme()
  const { registerBankAccount } = useSubscriptionsDispatch()

  const onSubmit: SubmitHandler<FormAccountData> = (data) => {
    registerBankAccount({
      current_account: data.current_account.slice(0, -2),
      current_account_check_number: data.current_account.slice(-1),
      holder_name: data.holder_name
    })
    router.push(CREDIT_CARD_PAGE)
  }
  return (
    <>
      <Header />
      <S.Main>
        <SideBar />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Line>
            <BancoUm color={colors.gray[200]} width='10.32' height='15' />
            Sua Conta Banco Um
          </S.Line>
          <S.Text>
            Nenhuma conta Banco Um registrada, gostaria de adicionar uma nova conta?
          </S.Text>
          <S.Content>
            <S.Title>Cod Banco</S.Title>
            <S.Title>Agência</S.Title>
          </S.Content>
          <S.Content>
            <S.Data>396 - Banco Um</S.Data>
            <S.Data>0001</S.Data>
          </S.Content>
          <S.DivInput>
            <S.Label>Conta Corrente</S.Label>
            <S.Input
              control={control}
              name='current_account'
              type='text'
              placeholder='00000000-0'
              {...register('current_account', {
                onChange: (e) => {
                  setValue('current_account', formatBankAccount(e.target.value))
                }
              })}
            />
          </S.DivInput>
          <S.DivInput>
            <S.Label>Nome completo do titular da conta</S.Label>
            <S.Input
              control={control}
              name='holder_name'
              type='text'
              placeholder='Nome completo'
            />
          </S.DivInput>
          <S.Description>
            A conta a ser cadastrada deve ser a conta Banco
            Um na qual o CPF, informado anteriormente, está vinculado.
          </S.Description>

          <S.ConfirmButton
            variant='secondary_degrade'
            type='submit'
            disabled={isButtonDisabled}
          >
            Confirmar
          </S.ConfirmButton>

          <Link href={SUBSCRIPTIONS_PAGE}>
            <S.ReturnButton
              variant='secondary'
            >
              Voltar
            </S.ReturnButton>
          </Link>
        </S.Form>
      </S.Main>
      <Footer />
    </>
  )
}
