import { ChangeEvent, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useQueryClient } from 'react-query'
import { useTheme } from 'styled-components'

import Modal from 'react-modal'

import { Input } from 'components/Input'
import { BancoUm } from 'components/Illustrations/BancoUm'
import { formatBankAccount } from 'utils/formatters/formatBankAccount'
import { useRegisterBankAccount } from 'hooks/useRegisterBankAccount'
import { QUERY_KEY_FIND_BILLING } from 'hooks/useWallet'

import { schema } from '../../../../schemas/insertBankAccount'

import * as S from './styles'
import { ModalBankAccountFormProps, ModalBankAccountProps } from './types'

export function ModalBankAccount ({ isOpen, onRequestClose, onRequestCloseNewModal }: ModalBankAccountProps) {
  const { colors } = useTheme()

  const [newConfirmModal, setNewConfirmModal] = useState(false)

  const handleRequestNewModal = () => {
    setNewConfirmModal(prevState => !prevState)
    onRequestCloseNewModal()
  }

  const handleCloseNewConfirmModal = () => {
    setNewConfirmModal(false)
  }

  const { mutateAsync: createBankAccount, isLoading } = useRegisterBankAccount()
  const queryClient = useQueryClient()

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

  const { current_account, holder_name } = getValues()

  const handleInputAccountFormat = (e: ChangeEvent<HTMLInputElement>) => {
    const accountFormatted = formatBankAccount(e.target.value)
    setValue('current_account', accountFormatted)
  }

  const handleCreateAccountBank: SubmitHandler<ModalBankAccountFormProps> = async (data) => {
    const accountNumber = data.current_account.slice(0, -2)
    const accountDigit = data.current_account.slice(-1)

    await createBankAccount({
      current_account: accountNumber,
      current_account_check_number: accountDigit,
      holder_name: data.holder_name
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY_FIND_BILLING)
        handleCloseNewConfirmModal()
      }
    })
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-container'
      >
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
        <S.BankingAccountForm onSubmit={handleSubmit(handleRequestNewModal)}>
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
          <S.ButtonContinue
            type='submit'
          >
            Confirmar
          </S.ButtonContinue>
          <S.ButtonCancel onClick={onRequestClose}>Cancelar</S.ButtonCancel>
        </S.BankingAccountForm>
      </Modal>

      <Modal
        isOpen={newConfirmModal}
        onRequestClose={handleCloseNewConfirmModal}
        overlayClassName='react-modal-overlay'
        className='react-modal-container'
      >
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
                {current_account}
              </S.TextConfirmAccount>
            </S.BankingConfirmAccount>
            <S.BankingConfirmAccount>
              <S.TitleContent>
                Titular
              </S.TitleContent>
              <S.TextConfirmAccount>
                {holder_name}
              </S.TextConfirmAccount>
            </S.BankingConfirmAccount>
          </S.BankingConfirmData>
          <S.ButtonContinue
            onClick={() => handleSubmit(handleCreateAccountBank({ current_account, holder_name }))}
            loading={isLoading}
          >
            Finalizar
          </S.ButtonContinue>
          <S.ButtonCancel onClick={handleRequestNewModal}>Voltar</S.ButtonCancel>
        </>
      </Modal>
    </>
  )
}
