import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  phone: Yup.string()
    .required()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(11, 'Must be exactly 11 digits')
    .max(11, 'Must be exactly 11 digits'),
});
