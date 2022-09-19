import Yup from 'settings/yup'

export const schema = Yup.object().shape({
  name: Yup
    .string()
    .required()
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, 'O nome não deve conter caracteres especiais.'),
  email: Yup
    .string()
    .email('Formato de email inválido')
    .required(),
  phone: Yup
    .string()
    .trim()
    .required()
    .min(15),
  message: Yup
    .string()
    .required()
})
