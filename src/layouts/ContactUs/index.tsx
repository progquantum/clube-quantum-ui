import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AxiosError } from 'axios'

import { useSendMessage } from 'hooks/useSendMessage'
import { SendMessageRequest } from 'hooks/useSendMessage/types'
import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber'
import { error } from 'helpers/notify/error'
import { success } from 'helpers/notify/success'
import { ContactUsImage } from 'components/Illustrations/ContactUs'
import { Input } from 'components/Input'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { schema } from 'schemas/sendMessage'
import { ErrorResponse } from 'shared/errors/apiSchema'

import * as S from './styles'

export function ContactUsPage () {
  const {
    control,
    handleSubmit,
    formState,
    setValue,
    reset,
    register
  } = useForm({
    resolver: yupResolver(schema)
  })

  const { isDirty, isSubmitting } = formState
  const { isLoading, mutate: sendMessage } = useSendMessage()

  const isButtonDisabled = isLoading || !isDirty || isSubmitting

  const onSubmit: SubmitHandler<SendMessageRequest> = (data) => {
    const formattedPhone = `+55 ${data.phone}`

    sendMessage({
      name: data.name,
      email: data.email,
      phone: formattedPhone,
      message: data.message
    }, {
      onError: (err: AxiosError<ErrorResponse>) => {
        const isPhoneNumberInvalid = err.response?.data.statusCode === 400 &&
            err.response?.data.message[0] === 'phone must be a phone number'

        const isEmailInvalid = err.response?.data.statusCode === 400 &&
        err.response?.data.message[0] === 'email must be an email'

        const unexpectedError = err.response.data.statusCode > 400 &&
        err.response.data.statusCode < 500

        if (isPhoneNumberInvalid) {
          error('Insira um número de telefone válido')
        }
        if (isEmailInvalid) {
          error('Insira um email válido')
        }
        if (unexpectedError) {
          error('Encontramos um erro por aqui, tente novamente mais tarde!')
        }
      },
      onSuccess: () => {
        success('Mensagem enviada com sucesso')
        reset({ name: '', phone: '', email: '', message: '' })
      }
    }
    )
  }

  return (
    <>
      <Header />
      <S.Container>
        <S.LeftWrapper>
          <S.ImageContainer>
            <ContactUsImage />
          </S.ImageContainer>
        </S.LeftWrapper>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Heading>
            Entre em contato conosco
          </S.Heading>
          <Input
            type='text'
            name='name'
            label='Nome'
            placeholder='Nome completo'
            control={control}
          />
          <Input
            type='email'
            name='email'
            label='Email'
            placeholder='email@email.com'
            control={control}
          />
          <Input
            type='text'
            label='Telefone'
            control={control}
            {...register('phone', {
              onChange: (e) => {
                setValue('phone', formatPhoneNumber(e.target.value))
              }
            })}
          />
          <S.Label htmlFor='message'>Mensagem</S.Label>
          <S.Message
            placeholder='Digite aqui a sua mensagem'
            id='message'
            name='message'
            cols={33}
            maxLength={500}
            {...register('message')}
            required
          />
          <S.ButtonSubmit
            type='submit'
            disabled={isButtonDisabled}
            loading={isLoading}
          >Enviar
          </S.ButtonSubmit>
        </S.Form>
      </S.Container>
      <Footer />
    </>
  )
}
