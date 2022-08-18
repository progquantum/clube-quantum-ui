import Yup from 'config/yup'

export const cvcSchema = Yup.object().shape({
  cvc: Yup
    .string()
    .min(3)
    .max(3)
    .required()
    .matches(/[0-9]/g)

})
