import Modal from 'react-modal'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useQueryClient } from 'react-query'

import { Location } from 'components/Illustrations/Location'
import { Input } from 'components/Input'

import { QUERY_KEY_ME_PROFILE } from 'hooks/useFindMeProfile'
import { useUpadateAddress } from 'hooks/useUpdateAddress'

import { addressSchemas } from 'schemas/updateRegister'
import { formatCEP } from 'utils/formatters/formatCEP'
import { formatAddressNumber } from 'utils/formatters/formatAddressNumber'
import { formatValueToUppercase } from 'utils/formatters/formatValueToUppercase'

import { error } from 'helpers/notify/error'
import { success } from 'helpers/notify/success'

import { AddressInformationProps, AddressFormProps } from './types'

import * as S from './styles'

export function AddressInformationModal ({ isOpen, onRequestClose }: AddressInformationProps) {
  const { mutateAsync: putAddress, isLoading: loading } = useUpadateAddress()
  const queryClient = useQueryClient()

  const {
    control,
    handleSubmit,
    register,
    setValue,
    reset
  } = useForm({
    resolver: yupResolver(addressSchemas)
  })

  const handleCloseModal = () => {
    onRequestClose()
    reset()
  }

  const handleUpdateAddress:SubmitHandler<AddressFormProps> = async (data) => {
    await putAddress({
      street: data.street,
      number: data.number,
      neighborhood: data.neighborhood,
      complement: data.complement,
      zip_code: data.zip_code,
      city: data.city,
      state: data.state,
      country: data.country
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY_ME_PROFILE)
        success('Perfil atualizado com sucesso.')
        onRequestClose()
      },
      onError: () => {
        error('Ops, algo deu errado!')
      }
    }
    )
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        overlayClassName='react-modal-overlay'
        className='react-modal-container'
      >
        <S.AddressContainer>
          <S.TextContent>
            <Location width='18' height='20' color='#BBBBBB' />
            <p>Endereço</p>
          </S.TextContent>

          <S.AddressForm onSubmit={handleSubmit(handleUpdateAddress)}>
            <S.AddressWrapper>
              <S.InputStreet
                type='text'
                label='Rua'
                control={control}
                name='street'
              />

              <Input
                type='text'
                label='Número'
                control={control}
                name='number'
                {...register('number', {
                  onChange: (e) => {
                    setValue('number', formatAddressNumber(e.target.value))
                  }
                })}
              />
            </S.AddressWrapper>

            <S.AddressWrapper>
              <Input
                type='text'
                label='Bairro'
                control={control}
                name='neighborhood'
              />

              <Input
                type='text'
                label='Complemento'
                control={control}
                name='complement'
              />
            </S.AddressWrapper>

            <S.AddressWrapper>

              <Input
                type='text'
                label='CEP'
                control={control}
                name='zip_code'
                {...register('zip_code', {
                  onChange: (e) => {
                    setValue('zip_code', formatCEP(e.target.value))
                  }
                })}
              />
              <Input
                type='text'
                label='Cidade'
                control={control}
                name='city'
              />
            </S.AddressWrapper>

            <S.AddressWrapper>

              <Input
                type='text'
                maxLength={2}
                label='UF'
                control={control}
                name='state'
                {...register('state', {
                  onChange: (e) => {
                    setValue('state', formatValueToUppercase(e.target.value))
                  }
                })}
              />

              <Input
                type='text'
                label='País'
                control={control}
                name='country'
              />
            </S.AddressWrapper>

            <S.ButtonConfirm
              type='submit'
              loading={loading}
              disabled={loading}
            >
              Confirmar Alterações
            </S.ButtonConfirm>
            <S.ButtonCancel onClick={handleCloseModal}>Cancelar</S.ButtonCancel>
          </S.AddressForm>
        </S.AddressContainer>
      </Modal>
    </>
  )
}
