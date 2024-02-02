import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  zip_code: Yup.string().required(),
  street: Yup.string().required(),
  neighborhood: Yup.string().required(),
  number: Yup.string(),
  complement: Yup.string(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  country: Yup.string().required(),
});
