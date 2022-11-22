import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  name: Yup.string()
    .required()
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      'O nome não deve conter caracteres especiais',
    ),
  birth_date: Yup.string().required(),
  email: Yup.string().required(),
  phone: Yup.string().trim().required().min(15),
});
