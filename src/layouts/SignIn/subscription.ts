import Yup from 'settings/yup';

export const cvcSchema = Yup.object().shape({
  cvc: Yup.string().max(3).min(3).required(),
});

export const creditCardSchema = Yup.object().shape({
  card_number: Yup.string()
    .required()
    .matches(
      /^(4654)\s(47\d{2})\s(\d{4})\s(\d{4})$/,
      'Cartão de crédito inválido',
    ),
  card_name: Yup.string().required(),
  expiration_date: Yup.string()
    .required()
    .matches(/(0[1-9]|10|11|12)[/](20\d{2})/, 'Validade do cartão incorreta')
    .min(
      7,
      'Data de validade deve conter mês com 2 dígitos e ano com 4 dígitos',
    ),
  cvc: Yup.string().max(3).min(3).required(),
});

export const bankAccountSchema = Yup.object().shape({
  current_account: Yup.string().required().min(9).max(9),
  holder_name: Yup.string().required(),
});
