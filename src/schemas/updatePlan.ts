import Yup from 'config/yup'

export const cvcSchema = Yup.object().shape({
  cvc: Yup
    .string()
    .max(3)
    .min(3)
    .required()
    .matches(/[0-9]/g, 'Campo deve conter somente números')

})
