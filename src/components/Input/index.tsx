import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { useTheme } from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import * as S from './styles';
import { InputProps } from './types';

export function Input({
  icon: Icon,
  name,
  type,
  typePassword,
  variant,
  label,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const { registerField, defaultValue, fieldName, error } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);
  const { colors } = useTheme();

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

  const inputType = isPasswordHidden ? 'password' : 'text';

  const handleClick = () => {
    setIsPasswordHidden(prevState => !prevState);
  };

  const iconContextProviderValue = useMemo(
    () => ({
      color: colors.input.icon,
    }),
    [],
  );

  return (
    <S.Container>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.ContainerInput
        isFocused={isFocused}
        isFilled={isFilled}
        hasError={!!error}
        aria-label={`${name}-container`}
        typePassword={typePassword}
      >
        {Icon && <Icon />}

        <S.Input
          name={name}
          type={type || inputType}
          variant={variant}
          defaultValue={defaultValue}
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          {...rest}
        />

        {typePassword && (
          <S.HidePasswordButtonContainer>
            <button type="button" onClick={handleClick}>
              <IconContext.Provider value={iconContextProviderValue}>
                {isPasswordHidden ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </IconContext.Provider>
            </button>
          </S.HidePasswordButtonContainer>
        )}
      </S.ContainerInput>

      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}
