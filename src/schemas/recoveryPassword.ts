import Yup from 'config/yup'

export const schema = Yup.object().shape({
  email: Yup.string().email().required()
})
