import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  email: Yup.string().email().required(),
});
