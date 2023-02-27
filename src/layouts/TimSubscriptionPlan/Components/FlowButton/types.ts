export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'primary_outline'
  | 'disabled';

export type ButtonProps = {
  variant: ButtonVariants;
};

export type ButtonFCProps = {
  onClick: () => void;
  variant: ButtonVariants;
};
