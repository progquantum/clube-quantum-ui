import * as yup from 'yup'

export const cpfSchema = yup.object().shape({
  cpf: yup.string().required()
})

export const phoneNumberSchema = yup.object().shape({
  phone: yup.string().trim().required()
})

export const personalDataSchema = yup.object().shape({
  name: yup.string().required(),
  birthDate: yup.string().required(),
  email: yup.string().required(),
  email_confirmation: yup.string().required(),
  password: yup.string().required(),
  password_confirmation: yup.string().required()
})

export const addressDataSchema = yup.object().shape({
  cep: yup.string().required(),
  street: yup.string().required(),
  neighborhood: yup.string().required(),
  number: yup.string().required(),
  complement: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  country: yup.string().required()
})
