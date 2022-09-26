import * as validator from 'cpf-cnpj-validator';

import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  login: Yup.string()
    .required()
    .test('test-invalid-cpf', cpf => validator.cpf.isValid(cpf)),
  password: Yup.string().required(),
});
