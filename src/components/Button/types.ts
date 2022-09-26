import { ButtonHTMLAttributes } from 'react';

export type ButtonVariants = 'secondary' | 'transparent' | 'rounded';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  background?: string;
  color?: string;
  loading?: boolean;
};
