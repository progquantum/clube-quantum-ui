import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  name: Yup.string().required(),
  birth_date: Yup.date().required(),
  email: Yup.string().email('Formato de email inválido').required(),
  email_confirmation: Yup.string()
    .required()
    .oneOf([null, Yup.ref('email')]),
  password: Yup.string().required().min(8),
  password_confirmation: Yup.string()
    .required()
    .min(8)
    .oneOf([null, Yup.ref('password')]),
});
