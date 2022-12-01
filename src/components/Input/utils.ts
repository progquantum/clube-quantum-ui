import { ValidationError } from 'yup';

type Erros = {
  [key: string]: string;
};

export const getValidationErrors = (validationError: ValidationError): Erros =>
  validationError.inner.reduce(
    (errorsAccumulator, error) => ({
      ...errorsAccumulator,
      [error.path]: error.message,
    }),
    {},
  );
