import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  street: Yup.string().required(),
  number: Yup.string().required(),
  neighborhood: Yup.string().required(),
  complement: Yup.string(),
  zip_code: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string()
    .required()
    .min(2)
    .max(2)
    .matches(/[A-Z]{2,}/gi, 'Esse campo deve conter apenas caracteres.'),
  country: Yup.string()
    .required()
    .matches(/[A-Za-z]/g, ''),
});
