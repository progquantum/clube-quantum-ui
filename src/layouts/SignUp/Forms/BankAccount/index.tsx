import { useForm } from 'react-hook-form'

import { Input } from 'components/Input'

import { formatBankAccount } from 'utils/formatters/formatBankAccount'

import { Button } from 'components/Button'

import * as S from './styles'
import { BankAccountProps } from './types'
export function BankAccount ({
  onUpdateFormStep,
  onPreviousFormStep
}: BankAccountProps) {
  const {
    control,
    register,
    setValue,
    formState,
    handleSubmit
  } = useForm()

  const { isDirty, isSubmitting } = formState
  const isButtonDisabled = !isDirty || isSubmitting

  function onSubmit () {
    onUpdateFormStep()
  }
  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Content>
        <S.BankDataTitle>Cod. Banco</S.BankDataTitle>
        <S.BankDataTitle>Agência</S.BankDataTitle>
      </S.Content>
      <S.Content>
        <S.BankData>396 - Banco Um</S.BankData>
        <S.BankData>0001</S.BankData>
      </S.Content>
      <Input
        type='text'
        label='Conta Corrente'
        name='current_account'
        control={control}
        placeholder='00000000-0'
        {...register('current_account', {
          onChange: (e) => {
            setValue('current_account', formatBankAccount(e.target.value))
          }
        })}
      />
      <Input
        control={control}
        label='Nome completo do titular da conta'
        name='holder_name'
        type='text'
        placeholder='Digite o nome do titular da conta'
      />
      <S.BankInfo>
        A conta a ser cadastrada deve ser a conta Banco Um na qual o CPF, informado anteriormente, está vinculado.
      </S.BankInfo>

      <Button
        type='submit'
        disabled={isButtonDisabled}
      >
        Continuar
      </Button>
      <Button
        variant='secondary'
        onClick={onPreviousFormStep}
      >
        voltar
      </Button>

    </S.Form>
  )
}
