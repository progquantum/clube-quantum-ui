import { TextareaHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
};

export type StyledContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
};
