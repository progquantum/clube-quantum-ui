import * as validator from 'cpf-cnpj-validator';

import Yup from 'settings/yup';

export const cpfSchema = Yup.object().shape({
  cpf: Yup.string()
    .required()
    .test('test-invalid-cpf', cpf => validator.cpf.isValid(cpf)),
});

export const cnpjSchema = Yup.object().shape({
  cnpj: Yup.string()
    .required()
    .test('test-invalid-cnpj', cnpj => validator.cnpj.isValid(cnpj)),
});

export const phoneNumberSchema = Yup.object().shape({
  phone: Yup.string().trim().required().min(15),
});

export const personalDataSchema = Yup.object().shape({
  name: Yup.string().required(),
  birth_date: Yup.string().required(),
  email: Yup.string().email('Formato de email inválido').required(),
  email_confirmation: Yup.string()
    .required()
    .oneOf([null, Yup.ref('email')]),
  password: Yup.string().required(),
  password_confirmation: Yup.string()
    .required()
    .oneOf([null, Yup.ref('password')]),
});

export const legalPersonDataSchema = Yup.object().shape({
  company_name: Yup.string().required(),
  email: Yup.string().email('Formato de email inválido').required(),
  email_confirmation: Yup.string()
    .required()
    .oneOf([null, Yup.ref('email')]),
  password: Yup.string().required().min(8),
  password_confirmation: Yup.string()
    .required()
    .min(8)
    .oneOf([null, Yup.ref('password')]),
});

export const addressDataSchema = Yup.object().shape({
  zip_code: Yup.string().required(),
  street: Yup.string().required(),
  neighborhood: Yup.string().required(),
  number: Yup.string().required(),
  complement: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string()
    .required()
    .matches(/[A-Z]{2,}/g, 'Campo deve conter somente letras. ex: SP'),
  country: Yup.string()
    .required()
    .matches(/[A-Za-z]/g, 'Campo deve conter somente letras'),
});

export const creditCardSchema = Yup.object().shape({
  card_number: Yup.string()
    .required()
    .matches(
      /^(4654)\s(47\d{2})\s(\d{4})\s(\d{4})$/,
      'Cartão de crédito inválido!',
    ),
  card_name: Yup.string().required(),
  expiration_date: Yup.string()
    .required()
    .matches(/(0[1-9]|10|11|12)[/](20\d{2})/, 'Validade do cartão inválida'),
  cvc: Yup.string()
    .max(3)
    .min(3)
    .required()
    .matches(/[0-9]/g, 'Campo deve conter somente números'),
});

export const bankAccountSchema = Yup.object().shape({
  current_account: Yup.string().required().min(9).max(9),
  holder_name: Yup.string().required(),
});
