import Yup from 'settings/yup'

export const addressSchemas = Yup.object().shape({
  street: Yup
    .string()
    .required(),
  number: Yup
    .string()
    .required(),
  neighborhood: Yup
    .string()
    .required(),
  complement: Yup
    .string(),
  zip_code: Yup
    .string()
    .required(),
  city: Yup
    .string()
    .required(),
  state: Yup
    .string()
    .required()
    .min(2)
    .max(2)
    .matches(/[A-Z]{2,}/gi, 'Esse campo deve conter apenas caracteres.'),
  country: Yup
    .string()
    .required()
    .matches(/[A-Za-z]/g, '')
})

export const personalInformationSchemas = Yup.object().shape({
  name: Yup
    .string()
    .required()
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, 'O nome não deve conter caracteres especiais.'),
  birth_date: Yup
    .string()
    .required(),
  email: Yup
    .string()
    .required()
    .matches(/[\w.-]+@[\w-]+\.[\w-.]+/gi, 'E-mail incorreto.'),
  phone: Yup
    .string()
    .trim()
    .required()
    .min(15)
})
