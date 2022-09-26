import Modal from 'react-modal'
import { ChangeEvent } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useQueryClient } from 'react-query'

import { QUERY_KEY_ME_PROFILE } from 'hooks/useFindMeProfile'
import { useUpdatePersonalInformation } from 'hooks/useUpdatePersonalInformation'

import { User } from 'components/Illustrations/User'
import { Input } from 'components/Input'

import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber'
import { formatBirthDate } from 'utils/formatters/formatBirthDate'
import { personalInformationSchemas } from 'schemas/updateRegister'

import { success } from 'helpers/notify/success'
import { error } from 'helpers/notify/error'

import { PersonalInformationFormProps, PersonalInformationProps } from './types'
import * as S from './styles'

export function PersonalInformationModal ({ isOpen, onRequestClose }: PersonalInformationProps) {
  const { mutateAsync: putPersonalInformation, isLoading: loading } = useUpdatePersonalInformation()
  const queryClient = useQueryClient()

  const {
    control,
    handleSubmit,
    register,
    setValue,
    reset
  } = useForm({
    resolver: yupResolver(personalInformationSchemas)
  })

  const handlePhoneNumberFormat = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value)

    setValue('phone', formattedPhoneNumber)
  }

  const handleBirthDateFormat = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedBirthDate = formatBirthDate(e.target.value)

    setValue('birth_date', formattedBirthDate)
  }

  const handleCloseModal = () => {
    onRequestClose()
    reset()
  }

  const handleSubmitPersonalInformation:SubmitHandler<PersonalInformationFormProps> = async (data) => {
    const formattedBirthDate = data.birth_date.split('/').reverse().join('-')

    await putPersonalInformation({
      name: data.name,
      birth_date: formattedBirthDate,
      phone: data.phone,
      email: data.email
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY_ME_PROFILE)
        success('Perfil atualizado com sucesso.')
        onRequestClose()
      },
      onError: () => {
        error('Opss, algo deu errado!')
      }
    })
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        overlayClassName='react-modal-overlay'
        className='react-modal-container'
      >
        <S.UserInformation>
          <S.TextContent>
            <User width='18' height='20' color='#BBBBBB' />
            <p>Informações Pessoais</p>
          </S.TextContent>

          <S.PersonalInformationForm onSubmit={handleSubmit(handleSubmitPersonalInformation)}>
            <Input
              type='text'
              label='Nome'
              control={control}
              name='name'
            />

            <Input
              type='text'
              label='Data de Nascimento'
              control={control}
              name='birth_date'
              {...register('birth_date', {
                onChange: e => handleBirthDateFormat(e)
              })}
            />

            <Input
              type='text'
              label='Telefone'
              control={control}
              name='phone'
              {...register('phone', {
                onChange: e => handlePhoneNumberFormat(e)
              })}
            />

            <Input
              type='text'
              label='Email'
              control={control}
              name='email'
            />

            <S.ButtonConfirm
              type='submit'
              loading={loading}
              disabled={loading}
            >
              Confirmar Alterações
            </S.ButtonConfirm>

            <S.ButtonCancel
              onClick={handleCloseModal}
            >
              Cancelar
            </S.ButtonCancel>
          </S.PersonalInformationForm>
        </S.UserInformation>
      </Modal>
    </>
  )
}
