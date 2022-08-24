import Yup from 'config/yup'

export const schema = Yup.object().shape({
  card_number: Yup.string().required().matches(/^(4654)\s(47\d{2})\s(\d{4})\s(\d{4})$/, 'Cartão de crédito inválido!'),
  card_name: Yup.string().required(),
  expiration_date: Yup.string().required(),
  cvc: Yup.string().required(),
  card_brand: Yup.string().required()
})
