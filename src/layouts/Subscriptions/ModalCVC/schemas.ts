import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  cvc: Yup.string()
    .max(3)
    .min(3)
    .required()
    .matches(/[0-9]/g, 'Campo deve conter somente números'),
});
