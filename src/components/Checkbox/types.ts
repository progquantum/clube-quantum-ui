import { InputHTMLAttributes } from 'react';

interface Props {
  name: string;
  value?: string;
  text?: string;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;
