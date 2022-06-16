import * as yup from 'yup'

export const cpfSchema = yup.object().shape({
  cpf: yup.string().required()
})

export const phoneNumberSchema = yup.object().shape({
  phone: yup.string().required()
})
