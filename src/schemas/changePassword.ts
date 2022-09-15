import Yup from 'config/yup'

export const schema = Yup.object().shape({
  actual_password: Yup.string().required().min(8),
  new_password: Yup.string().required().min(8),
  confirm_new_password: Yup.string().required().min(8).oneOf([null, Yup.ref('new_password')])
})
