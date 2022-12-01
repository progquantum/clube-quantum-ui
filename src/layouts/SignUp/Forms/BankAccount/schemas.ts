import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  current_account: Yup.string().required().min(9),
  holder_name: Yup.string().required(),
});
