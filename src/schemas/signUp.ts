import * as validator from 'cpf-cnpj-validator'

import Yup from 'config/yup'

export const cpfSchema = Yup.object().shape({
  cpf: Yup
    .string()
    .required()
    .test(
      'test-invalid-cpf',
      (cpf) => validator.cpf.isValid(cpf)
    )
})

export const cnpjSchema = Yup.object().shape({
  cnpj: Yup
    .string()
    .required()
    .test(
      'test-invalid-cnpj',
      (cnpj) => validator.cnpj.isValid(cnpj)
    )
})

export const phoneNumberSchema = Yup.object().shape({
  phone: Yup
    .string()
    .trim()
    .required()
    .min(15)
})

export const personalDataSchema = Yup.object().shape({
  name: Yup
    .string()
    .required(),
  birth_date: Yup
    .string()
    .required(),
  email: Yup
    .string()
    .required(),
  email_confirmation: Yup
    .string()
    .required()
    .oneOf([null, Yup.ref('email')]),
  password: Yup
    .string()
    .required(),
  password_confirmation: Yup
    .string()
    .required()
    .oneOf([null, Yup.ref('password')])
})

export const legalPersonDataSchema = Yup.object().shape({
  company_name: Yup
    .string()
    .required(),
  email: Yup
    .string()
    .required(),
  email_confirmation: Yup
    .string()
    .required()
    .oneOf([null, Yup.ref('email')]),
  password: Yup
    .string()
    .required()
    .min(8),
  password_confirmation: Yup
    .string()
    .required()
    .min(8)
    .oneOf([null, Yup.ref('password')])
})

export const addressDataSchema = Yup.object().shape({
  zipCode: Yup
    .string()
    .required(),
  street: Yup
    .string()
    .required(),
  neighborhood: Yup
    .string()
    .required(),
  number: Yup
    .string()
    .required(),
  complement: Yup
    .string()
    .required(),
  city: Yup
    .string()
    .required(),
  state: Yup
    .string()
    .required()
    .min(2),
  country: Yup
    .string()
    .required()
})
