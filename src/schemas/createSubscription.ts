import Yup from 'config/yup'

export const cvcSchema = Yup.object().shape({
  cvc: Yup
    .string()
    .max(3)
    .min(3)
    .required()
    .matches(/[0-9]/g, 'Campo deve conter somente números')

})

export const creditCardSchema = Yup.object().shape({
  card_number: Yup
    .string()
    .required()
    .matches(/^(4654)\s(47\d{2})\s(\d{4})\s(\d{4})$/, 'Cartão de crédito inválido!'),
  card_name: Yup
    .string()
    .required(),
  expiration_date: Yup
    .string()
    .required(),
  cvc: Yup
    .string()
    .max(3)
    .min(3)
    .required()
    .matches(/[0-9]/g, 'Campo deve conter somente números')
})

export const bankAccountSchema = Yup.object().shape({
  current_account: Yup
    .string()
    .required()
    .min(9)
    .max(9),
  holder_name: Yup
    .string()
    .required()
})
