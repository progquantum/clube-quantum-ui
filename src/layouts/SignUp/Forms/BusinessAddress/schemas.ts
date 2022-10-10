import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  zip_code: Yup.string().required(),
  street: Yup.string().required(),
  neighborhood: Yup.string().required(),
  number: Yup.string().required(),
  complement: Yup.string(),
  city: Yup.string().required(),
  state: Yup.string()
    .required()
    .matches(/[A-Z]{2,}/g, 'Campo deve conter somente letras. ex: SP'),
  country: Yup.string()
    .required()
    .matches(/[A-Za-z]/g, 'Campo deve conter somente letras'),
  terms: Yup.boolean().oneOf(
    [true],
    'Para prosseguir você precisa aceitar os termos!',
  ),
});
