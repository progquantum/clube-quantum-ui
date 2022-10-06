import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
};
