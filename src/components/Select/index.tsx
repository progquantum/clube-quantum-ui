import { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { IoMdArrowDropdown } from 'react-icons/io';

import { SelectProps } from './types';
import * as S from './styles';

export function Select({
  name,
  label,
  placeholder,
  options,
  ...rest
}: SelectProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { registerField, defaultValue, fieldName, error } = useField(name);

  const selectRef = useRef(null);

  useEffect(() => {
    registerField({
      ref: selectRef?.current,
      path: 'value',
      name: fieldName,
    });
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!selectRef?.current?.value);
  }, []);

  const handleInputChange = useCallback(() => {
    setIsFilled(!!selectRef?.current?.value);
  }, []);

  return (
    <S.Container>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.SelectContainer
        isFocused={isFocused}
        isFilled={isFilled}
        hasError={!!error}
        aria-label={`${name}-container`}
      >
        <S.SelectStyle
          id={name}
          name={name}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          placeholder={placeholder}
          ref={selectRef}
          {...rest}
        >
          <S.Option key="" value="">
            {placeholder}
          </S.Option>
          {options?.map(option => (
            <S.Option key={option.label} value={option.value}>
              {option.label}
            </S.Option>
          ))}
        </S.SelectStyle>
        <IoMdArrowDropdown
          size={20}
          style={{ position: 'absolute', right: '15' }}
        />
      </S.SelectContainer>

      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}
