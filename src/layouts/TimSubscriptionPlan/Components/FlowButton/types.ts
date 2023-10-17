export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'primary_outline'
  | 'disabled';

export type ButtonProps = {
  variant: ButtonVariants;
};

export type ButtonFCProps = {
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  form?: string;
  variant: ButtonVariants;
};
