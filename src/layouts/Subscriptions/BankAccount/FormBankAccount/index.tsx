import { useForm, SubmitHandler } from 'react-hook-form'

import Link from 'next/link'

import { BancoUm } from 'components/Illustrations/BancoUm'
import { colors } from 'styles/theme/colors'

import { CREDIT_CARD_PAGE, SUBSCRIPTIONS_PAGE } from 'constants/routesPath'

import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext'

import { FormAccountData } from './types'
import * as S from './styles'

export function FormBankAccount () {
  const {
    control,
    handleSubmit,
    formState
  } = useForm({
    defaultValues: {
      current_account: '',
      holder_name: ''
    }
  })
  const { isDirty, isSubmitting } = formState
  const isButtonDisabled = !isDirty || isSubmitting

  const { setBankAccount } = useSubscriptionsDispatch()

  const onSubmit: SubmitHandler<FormAccountData> = (data) => {
    setBankAccount({
      current_account: data.current_account.slice(0, -2),
      current_account_check_number: data.current_account.slice(-1),
      holder_name: data.holder_name
    })
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Line><BancoUm color={colors.gray[200]} width='10.32' height='15' />Sua Conta Banco Um</S.Line>
      <S.Text>Nenhuma conta Banco Um registrada, gostaria de adicionar uma nova conta?</S.Text>
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

      <Link href={CREDIT_CARD_PAGE}>
        <S.ConfirmButton
          variant='secondary_degrade'
          type='submit'
          disabled={isButtonDisabled}
        >
          Confirmar
        </S.ConfirmButton>
      </Link>

      <Link href={SUBSCRIPTIONS_PAGE}>
        <S.ReturnButton
          variant='secondary'
        >
          Voltar
        </S.ReturnButton>
      </Link>
    </S.Form>

  )
}
