import { ButtonHTMLAttributes } from 'react';

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'secondary_degrade'
  | 'transparent'
  | 'rounded'
  | 'disabled'
  | 'danger'
  | 'danger_outline';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  background?: string;
  color?: string;
  loading?: boolean;
};
