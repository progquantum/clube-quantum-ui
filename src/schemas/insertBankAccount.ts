import Yup from 'config/yup'

export const schema = Yup.object().shape({
  current_account: Yup.string().required().min(10),
  holder_name: Yup.string().required()
})
