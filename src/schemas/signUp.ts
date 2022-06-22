import * as yup from 'yup'
import * as validator from 'cpf-cnpj-validator'

export const cpfSchema = yup.object().shape({
  cpf: yup
    .string()
    .required('O campo é obrigatório')
    .test(
      'test-invalid-cpf',
      'CPF inválido',
      (cpf) => validator.cpf.isValid(cpf)
    )
})

export const phoneNumberSchema = yup.object().shape({
  phone: yup
    .string()
    .trim()
    .required('O campo é obrigatório')
    .min(15, 'O campo deve ter 11 caracteres')
})

export const personalDataSchema = yup.object().shape({
  name: yup
    .string()
    .required('O campo é obrigatório'),
  birth_date: yup
    .string()
    .required('O campo é obrigatório'),
  email: yup
    .string()
    .required('O campo é obrigatório'),
  email_confirmation: yup
    .string()
    .required('O campo é obrigatório')
    .oneOf([null, yup.ref('email')], 'Os e-mails precisam ser iguais'),
  password: yup
    .string()
    .required('O campo é obrigatório'),
  password_confirmation: yup
    .string()
    .required('O campo é obrigatório')
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

export const addressDataSchema = yup.object().shape({
  cep: yup
    .string()
    .required('O campo é obrigatório'),
  street: yup
    .string()
    .required('O campo é obrigatório'),
  neighborhood: yup
    .string()
    .required('O campo é obrigatório'),
  number: yup
    .string()
    .required('O campo é obrigatório'),
  complement: yup
    .string()
    .required('O campo é obrigatório'),
  city: yup
    .string()
    .required('O campo é obrigatório'),
  state: yup
    .string()
    .required('O campo é obrigatório'),
  country: yup
    .string()
    .required('O campo é obrigatório')
})
