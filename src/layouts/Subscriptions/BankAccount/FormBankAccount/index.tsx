import Image from 'next/image'

import { useForm } from 'react-hook-form'

import { BancoUm } from 'components/Illustrations/BancoUm'
import { colors } from 'styles/theme/colors'

import { Input } from 'components/Input'

import * as S from './styles'

export function FormBankAccount () {
  const { control } = useForm()

  return (
    <S.Container>
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
      <Input
        label='Conta Corrente'
        control={control}
        name='bankAccount'
        type='text'
        placeholder='00000000-0'
      />
      <Input
        label='Nome completo do titular da conta'
        control={control}
        name='bankAccount'
        type='text'
        placeholder='Nome impresso no cartão'
      />
      <S.Description>
        A conta a ser cadastrada deve ser a conta Banco Um na qual o CPF, informado anteriormente, está vinculado.
      </S.Description>
      <S.ConfirmButton>Confirmar</S.ConfirmButton>
      <S.ReturnButton variant='secondary'>Voltar</S.ReturnButton>
    </S.Container>

  )
}
