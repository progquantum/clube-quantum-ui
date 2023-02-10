import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  name: Yup.string().required(),
  birth_date: Yup.date()
    .transform((_, originalValue) => {
      try {
        const date = originalValue.split('/');

        if (date.length === 3) {
          const newDate = `${date[2]}-${date[1]}-${date[0]}`;
          return new Date(newDate);
        }
        return null;
      } catch (e) {
        return null;
      }
    })
    .required(),
  // .max(currentDate, 'Data de aniversário inválida'),
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
