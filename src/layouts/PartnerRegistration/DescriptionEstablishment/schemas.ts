import Yup from 'settings/yup';

const cashBackSchema = Yup.array().of(
  Yup.object().shape({
    rate_cash_back: Yup.string().required(),
    rate_cash_back_client: Yup.string().required(),
    rate_adm_quantum: Yup.string().required(),
  }),
);
const openingHoursSchema = Yup.array().of(
  Yup.object().shape({
    opening_hours: Yup.string().required(),
  }),
);

const machinePosSchema = Yup.array().of(
  Yup.object().shape({
    pos_serial_number: Yup.string().required(),
    secretToken: Yup.string().required(),
  }),
);
export const schema = Yup.object().shape({
  about: Yup.string().required(),
  cashBack: cashBackSchema,
  openingHours: openingHoursSchema,
  machinePos: machinePosSchema,
});
