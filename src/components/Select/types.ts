import { InputHTMLAttributes } from 'react';

export type SelectProps = InputHTMLAttributes<HTMLSelectElement> & {
  name: string;
  label?: string;
  placeholder: string;
  options: {
    value: string;
    label: string;
  }[];
};

export type StyledContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
};
