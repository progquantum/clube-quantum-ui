import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  user_id: Yup.string(),
  fantasy_name: Yup.string().required(),
  phone: Yup.string().required(),
  main_phone_has_whatsapp: Yup.boolean(),
  cel_phone: Yup.string(),
  cel_phone_has_whatsapp: Yup.boolean(),
  whatsapp_phone: Yup.string(),
  category_id: Yup.string().required(),
  coordinates: Yup.string()
    .required()
    .matches(
      /^([-+]?)([\d]{1,2})(((\.)(\d+)(,)))(\s*)(([-+]?)([\d]{1,3})((\.)(\d+))?)$/,
      'Coordenadas incorreta',
    ),
  banner: Yup.string(),
  logo: Yup.string(),
});
