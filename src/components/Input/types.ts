import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  variant?: InputVariant;
  typePassword?: boolean;
};

export type InputVariant = 'secundary';

export type StyledContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
  variant?: InputVariant;
  typePassword?: boolean;
};
