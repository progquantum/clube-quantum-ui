import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  phone: Yup.string().trim().required().min(15),
  confirmPhone: Yup.string()
    .trim()
    .required()
    .min(15)
    .oneOf([Yup.ref('phone'), null], 'Telefones precisam ser o mesmo'),
});
