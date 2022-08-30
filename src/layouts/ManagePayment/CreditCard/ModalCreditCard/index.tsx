import { ChangeEvent } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useQueryClient } from 'react-query'

import { formatCreditCard } from 'utils/formatters/formatCreditCard'
import { formatCreditCardExpiration } from 'utils/formatters/formatCreditCardExpiration'
import { useUpdateCreditCard } from 'hooks/userUpdateCreditCard'

import { Input } from 'components/Input'
import { colors } from 'styles/theme/colors'

import { QUERY_KEY_FIND_BILLING } from 'hooks/useFindBilling'

import CreditCardIcon from 'components/Illustrations/CreditCard'

import { schema } from '../../../../schemas/updateCreditCard'

import { ModalCreditCardProps, ModalCreditCardFormProps } from './types'
import * as S from './styles'

export function ModalCreditCard ({ onClose }: ModalCreditCardProps) {
  const { mutateAsync: createCreditCard, isLoading: loading } = useUpdateCreditCard()
  const queryClient = useQueryClient()

  const {
    control,
    handleSubmit,
    getValues,
    register,
    setValue
  } = useForm({
    defaultValues: {
      card_number: '',
      card_name: '',
      expiration_date: '',
      cvc: '',
      card_brand: 'Visa'
    },
    resolver: yupResolver(schema)
  })

  const handleInputCardFormat = (e: ChangeEvent<HTMLInputElement>) => {
    const creditCardFormatted = formatCreditCard(e.target.value)

    setValue('card_number', creditCardFormatted)
  }

  const handleInputExpirationDateFormat = (e: ChangeEvent<HTMLInputElement>) => {
    const expirationDateFormatted = formatCreditCardExpiration(e.target.value)

    setValue('expiration_date', expirationDateFormatted)
  }

  const handleCreateCreditCard:SubmitHandler<ModalCreditCardFormProps> = async (data) => {
    const card_number = data.card_number.replace(/ /g, '')
    const card_name = data.card_name
    const expiration_date = data.expiration_date
    const cvc = data.cvc
    const card_brand = data.card_brand

    await createCreditCard(
      {
        card_number,
        card_name,
        expiration_date,
        cvc,
        card_brand
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEY_FIND_BILLING)
          onClose()
        }
      })
  }

  return (
    <>
      <S.YourAccount>
        <CreditCardIcon color={colors.gray[100]} width='20' height='14' />
        <S.ContentTitle>Seu cartão cadastrado</S.ContentTitle>
      </S.YourAccount>
      <S.CreditCardForm onSubmit={handleSubmit(() => handleCreateCreditCard(getValues()))}>
        <Input
          type='text'
          label='Nome do Cartão'
          name='card_name'
          control={control}
        />
        <Input
          maxLength={19}
          type='text'
          label='Número do Cartão'
          name='card_number'
          control={control}
          {...register('card_number', {
            onChange: (e) => handleInputCardFormat(e)
          })}
        />
        <Input
          maxLength={7}
          type='text'
          label='Data de Vencimento'
          name='expiration_date'
          control={control}
          {...register('expiration_date', {
            onChange: (e) => handleInputExpirationDateFormat(e)
          })}
        />
        <Input
          maxLength={3}
          type='text'
          label='CVV'
          name='cvc'
          control={control}
        />
        <S.ButtonConfirm type='submit' loading={loading} disabled={loading}>Confirmar</S.ButtonConfirm>
        <S.ButtonCancel onClick={onClose} disabled={loading}>Cancelar</S.ButtonCancel>
      </S.CreditCardForm>
    </>
  )
}
