import { forwardRef } from 'react';
import { useController } from 'react-hook-form';
import { FiAlertCircle } from 'react-icons/fi';

import { useToggle } from 'hooks/useToggle';

import { InputProps } from './types';
import * as S from './styles';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon: Icon, control, name, ...rest }, ref) => {
    const { on, eventHandlers } = useToggle();
    const { fieldState, field, formState } = useController({ control, name });

    const { error, isDirty } = fieldState;
    const { isValid } = formState;
    return (
      <S.Container
        isFilled={on || isDirty || isValid}
        hasError={!!error}
        aria-label={`${name}-container`}
      >
        {Icon && <Icon />}

        <S.Input ref={ref} {...eventHandlers} {...field} {...rest} />

        {error && <S.Error title={error.message} icon={FiAlertCircle} />}
      </S.Container>
    );
  },
);
