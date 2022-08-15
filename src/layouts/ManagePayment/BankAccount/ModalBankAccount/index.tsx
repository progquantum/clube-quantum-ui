import { ChangeEvent, useCallback, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from 'components/Input'
import { formatBankAccount } from 'utils/formatters/formatBankAccount'
import { useRegisterBankAccount } from 'hooks/useRegisterBankAccount'

import { BancoUm } from 'components/Illustrations/BancoUm'

import { colors } from 'styles/theme/colors'

import { schema } from '../../../../schemas/insertBankAccount'
import { ModalBankAccountProps, ModalBankAccountFormProps } from './types'
import * as S from './styles'

export function ModalBankAccount ({ close }:ModalBankAccountProps) {
  const [isInConfirmModal, setIsInConfirmModal] = useState(false)

  const { mutate } = useRegisterBankAccount()

  const {
    control,
    handleSubmit,
    getValues,
    register,
    setValue
  } = useForm({
    defaultValues: {
      current_account: '',
      holder_name: ''
    },
    resolver: yupResolver(schema)
  })

  function handleBankAccount () {
    setIsInConfirmModal(true)
  }

  const handleInputAccountFormat = (e: ChangeEvent<HTMLInputElement>) => {
    const accountFormatted = formatBankAccount(e.target.value)
    setValue('current_account', accountFormatted)
  }

  const handleCreateAccountBank: SubmitHandler<ModalBankAccountFormProps> = useCallback((data) => {
    const current_account = data.current_account.slice(0, -2)
    const current_account_check_number = data.current_account.slice(-1)
    const holder_name = data.holder_name

    mutate({ current_account, current_account_check_number, holder_name })
    close()
  }, [])

  return (
    <>
      {!isInConfirmModal
        ? (
          <>
            <S.YourAccount>
              <BancoUm color={colors.gray[200]} width='22' height='16' />
              <S.ContentTitle>Sua conta Banco Um</S.ContentTitle>
            </S.YourAccount>
            <S.BankingData>
              <S.BankingAccount>
                <S.TitleContent>
                  Cód. Banco
                </S.TitleContent>

                <S.TextContent>
                  396 - Banco Um
                </S.TextContent>
              </S.BankingAccount>

              <S.BankingAccount>
                <S.TitleContent>Agência</S.TitleContent>
                <S.TextContent>0001</S.TextContent>
              </S.BankingAccount>
            </S.BankingData>
            <S.BankingAccountForm onSubmit={handleSubmit(handleBankAccount)}>
              <Input
                maxLength={10}
                type='text'
                label='Conta Corrente'
                name='current_account'
                control={control}
                {...register('current_account', {
                  onChange: (e) => handleInputAccountFormat(e)
                })}
              />
              <Input
                type='text'
                label='Nome completo do titular'
                name='holder_name'
                control={control}
              />
              <S.InfoText>A conta do Banco Um deve estar vinculada ao mesmo CPF cadastrado no Clube Quantum.</S.InfoText>
              <S.ButtonContinue type='submit'>Confirmar</S.ButtonContinue>
              <S.ButtonCancel onClick={close}>Cancelar</S.ButtonCancel>
            </S.BankingAccountForm>
          </>
          )
        : (
          <>
            <S.YourConfirmAccount>
              <BancoUm color={colors.mediumslateBlue} width='22' height='16' />
              <S.ContentConfirmAccount>Sua conta Banco Um</S.ContentConfirmAccount>
            </S.YourConfirmAccount>
            <S.BankingConfirmData>
              <S.BankingConfirmAccount>
                <S.TitleContent>
                  Cód. Banco
                </S.TitleContent>

                <S.TextConfirmAccount>
                  396 - Banco Um
                </S.TextConfirmAccount>
              </S.BankingConfirmAccount>
              <S.BankingConfirmAccount>
                <S.TitleContent>
                  Agência
                </S.TitleContent>
                <S.TextConfirmAccount>
                  0001
                </S.TextConfirmAccount>
              </S.BankingConfirmAccount>
              <S.BankingConfirmAccount>
                <S.TitleContent>
                  Conta
                </S.TitleContent>
                <S.TextConfirmAccount>
                  {getValues('current_account')}
                </S.TextConfirmAccount>
              </S.BankingConfirmAccount>
              <S.BankingConfirmAccount>
                <S.TitleContent>
                  Titular
                </S.TitleContent>
                <S.TextConfirmAccount>
                  {getValues('holder_name')}
                </S.TextConfirmAccount>
              </S.BankingConfirmAccount>
            </S.BankingConfirmData>
            <S.ButtonContinue onClick={() => handleCreateAccountBank(getValues())}>Finalizar</S.ButtonContinue>
            <S.ButtonCancel onClick={() => setIsInConfirmModal(false)}>Voltar</S.ButtonCancel>
          </>
          )}
    </>
  )
}
