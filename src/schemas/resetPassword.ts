import Yup from 'settings/yup'

export const schema = Yup.object().shape({
  password: Yup.string().required(),
  confirm_password: Yup.string().required().oneOf([null, Yup.ref('password')])
})
