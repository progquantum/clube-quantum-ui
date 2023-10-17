import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

export type InputVariant = 'secundary';

export type StyledContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
  variant?: InputVariant;
  typePassword?: boolean;
};
