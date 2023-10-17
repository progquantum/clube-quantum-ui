import { InputHTMLAttributes } from 'react';

export type InputSearchProps = InputHTMLAttributes<HTMLInputElement> & {
  name?: string;
  placeholder?: string;
  onRequestClick?: () => void;
};
