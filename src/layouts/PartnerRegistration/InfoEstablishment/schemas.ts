import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  user_id: Yup.string(),
  fantasy_name: Yup.string().required(),
  main_phone_has_whatsapp: Yup.boolean(),
  cell_phone: Yup.string(),
  cell_phone_has_whatsapp: Yup.boolean(),
  whatsapp_phone: Yup.string().optional(),
  category_id: Yup.string().required(),
  coordinates: Yup.string()
    .required()
    .matches(
      /^([-+]?)([\d]{1,2})(((\.)(\d+)(,)))(\s*)(([-+]?)([\d]{1,3})((\.)(\d+))?)$/,
      'Coordenadas incorreta',
    ),
  banner: Yup.string(),
  logo: Yup.mixed<FileList>(),
});
