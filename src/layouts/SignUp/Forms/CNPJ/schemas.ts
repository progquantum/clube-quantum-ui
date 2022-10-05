import * as validator from 'cpf-cnpj-validator';

import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  cnpj: Yup.string()
    .required()
    .test('test-invalid-cnpj', 'Campo inválido', cnpj =>
      validator.cnpj.isValid(cnpj),
    ),
});
