import { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import Image from 'next/legacy/image';

import * as S from './styles';
import { InputProps } from './types';

export function FilterInput({ name, ...rest }: InputProps) {
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
    <>
      <S.ContainerInput
        isFocused={isFocused}
        isFilled={isFilled}
        hasError={!!error}
        aria-label={`${name}-container`}
      >
        <S.Input
          name={name}
          type="text"
          defaultValue={defaultValue}
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          {...rest}
        />
        <S.Button>
          <Image
            src="/images/magnifier.svg"
            alt="search icon"
            width={20}
            height={20}
          />
        </S.Button>
      </S.ContainerInput>
      {error && <S.Error>{error}</S.Error>}
    </>
  );
}
