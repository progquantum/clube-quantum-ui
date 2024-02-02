import { FormHandles } from '@unform/core';
import { RefObject } from 'react';
import { ObjectSchema, Shape } from 'yup';

import { getValidationErrors } from 'components/Input/utils';

type PerfomSchemaValidationParameter = {
  formRef: RefObject<FormHandles>;
  schema: ObjectSchema<Shape<any, any>>;
  data: Record<string, string | boolean>;
};

export const performSchemaValidation = async ({
  data,
  formRef,
  schema,
}: PerfomSchemaValidationParameter) => {
  formRef.current?.setErrors({});

  try {
    await schema.validate(data, {
      abortEarly: false,
    });
  } catch (error) {
    const errors = getValidationErrors(error);

    formRef.current?.setErrors(errors);

    throw error;
  }
};
