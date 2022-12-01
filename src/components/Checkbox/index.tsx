/* eslint-disable no-param-reassign */
import { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputProps } from './types';
import * as S from './styles';

export function Checkbox({ name, value, ...rest }: InputProps) {
  const inputRef = useRef();
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const defaultChecked = false;
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => ref.current.checked,
      clearValue: ref => {
        ref.current.checked = defaultChecked;
      },
      setValue: (ref, value) => {
        ref.current.checked = value;
      },
    });
  }, [defaultValue, fieldName, registerField, defaultChecked]);

  return (
    <>
      <S.Terms>
        <S.CheckBox
          defaultChecked={defaultChecked}
          ref={inputRef}
          value={value}
          type="checkbox"
          id={fieldName}
          {...rest}
        />
        <S.TextTerm>
          Para continuar você precisa ler e concordar com nossos{' '}
          <strong>termos e condições</strong> e
          <strong> política de privacidade. </strong>
        </S.TextTerm>
      </S.Terms>
      <div>{error && <S.Error>{error}</S.Error>}</div>
    </>
  );
}
