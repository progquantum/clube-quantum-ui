import Yup from 'settings/yup'

export const schema = Yup.object().shape({
  login: Yup.string().required(),
  password: Yup.string().required()
})
