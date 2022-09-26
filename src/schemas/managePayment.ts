import Yup from 'settings/yup';

export const bankAccountSchema = Yup.object().shape({
  current_account: Yup.string().required().min(9).max(9),
  holder_name: Yup.string()
    .required()
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      'O nome não deve conter caracteres especiais.',
    ),
});

export const creditCardSchema = Yup.object().shape({
  card_number: Yup.string()
    .required()
    .matches(
      /^(4654)\s(47\d{2})\s(\d{4})\s(\d{4})$/,
      'Cartão de crédito inválido.',
    ),
  card_name: Yup.string()
    .required()
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      'O nome não deve conter caracteres especiais.',
    ),
  expiration_date: Yup.string()
    .required()
    .matches(/(0[1-9]|10|11|12)[/](20\d{2})/, 'Validade do cartão incorreta.'),
  cvc: Yup.string()
    .required()
    .matches(/\d{3}/, 'Informe um CVV com 3 dígitos.'),
  card_brand: Yup.string().required(),
});
