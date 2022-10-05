import { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { InputProps } from './types';
import * as S from './styles';

export function Input({ icon: Icon, name, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { registerField, defaultValue, fieldName, error } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      ref: inputRef?.current,
      path: 'value',
      name: fieldName,
    });
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef?.current?.value);
  }, []);

  const handleInputChange = useCallback(() => {
    setIsFilled(!!inputRef?.current?.value);
  }, []);

  return (
    <S.Container
      isFocused={isFocused}
      isFilled={isFilled}
      hasError={!!error}
      aria-label={`${name}-container`}
    >
      {Icon && <Icon />}

      <S.Input
        name={name}
        defaultValue={defaultValue}
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        {...rest}
      />

      {error && <S.Error title={error} icon={FiAlertCircle} />}
    </S.Container>
  );
}
