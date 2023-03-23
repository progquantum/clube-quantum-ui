import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  user: Yup.string(),
  company_name: Yup.string().required(),
  phone: Yup.string().required(),
  hasWhatsApp1: Yup.boolean(),
  phone2: Yup.string(),
  hasWhatsApp2: Yup.boolean(),
  phone3: Yup.string(),
  category: Yup.string().required(),
  link_geo: Yup.string().required(),
  banner: Yup.string(),
  logo: Yup.string(),
});
