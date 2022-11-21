import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  card_number: Yup.string()
    .required()
    .matches(/^(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})$/, 'Cartão inválido.'),
  card_name: Yup.string().required(),
  expiration_date: Yup.string()
    .required()
    .matches(/(0[1-9]|10|11|12)[/](20\d{2})/, 'Data inválida.'),
  cvc: Yup.string().max(3).min(3).required(),
});
