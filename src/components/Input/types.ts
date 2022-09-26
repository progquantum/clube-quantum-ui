import { InputHTMLAttributes } from 'react';
import { Control } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  control: Control<any, any>;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
};

export type StyledContainerProps = {
  isFilled: boolean;
  hasError: boolean;
};
