import * as yup from 'yup'

export const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(8).max(32).required()
})
