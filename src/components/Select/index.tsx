import { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { useTheme } from 'styled-components';

import { SelectProps } from './types';
import * as S from './styles';

export function Select({ name, label, placeholder, options }: SelectProps) {
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

  const { colors } = useTheme();

  const customStyle = {
    option: styles => ({
      ...styles,
      width: '100%',
      height: '4rem',
      borderRadius: '0.625rem',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '9px',
    }),
    control: styles => ({
      ...styles,
      backgroundColor: colors.white,
      border: 0,
      borderRadius: '0.625rem',
      width: '100%',
      boxShadow: 'none',
    }),
    input: styles => ({
      ...styles,
      color: colors.gray[700],
      border: 'none',
    }),
    valueContainer: styles => ({
      ...styles,
      height: '4rem',
      paddingTop: '0px',
      paddingBottom: '0px',
      padding: '0 1.25rem',
    }),
    menu: styles => ({
      ...styles,
      backgroundColor: colors.white,
      borderRadius: '0.625rem',
      marginTop: '0',
    }),
  };

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
          defaultValue={defaultValue}
          name={name}
          options={options}
          className="basic-single"
          classNamePrefix="select"
          styles={customStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          placeholder={placeholder}
          ref={selectRef}
        />
      </S.SelectContainer>

      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}
