import { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { TextAreaProps } from './types';
import * as S from './styles';

export function TextArea({ name, icon: Icon, label, ...rest }: TextAreaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, registerField, error } = useField(name);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    registerField({
      ref: textAreaRef?.current,
      name: fieldName,
      path: 'value',
    });
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!textAreaRef?.current?.value);
  }, []);

  const handleInputChange = useCallback(() => {
    setIsFilled(!!textAreaRef?.current?.value);
  }, []);

  return (
    <>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Container
        isFocused={isFocused}
        isFilled={isFilled}
        hasError={!!error}
        aria-label={`${name}-container`}
      >
        {Icon && <Icon />}
        <S.Message
          name={name}
          ref={textAreaRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          {...rest}
          required
        />
        {error && <S.Error title={error} />}
      </S.Container>
    </>
  );
}
