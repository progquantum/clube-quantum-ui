import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  phone: Yup.string().trim().required().min(15),
});
