import * as validator from 'cpf-cnpj-validator';

import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  cpf: Yup.string()
    .required()
    .test('test-invalid-cpf', 'Campo inválido', cpf =>
      validator.cpf.isValid(cpf),
    ),
});
