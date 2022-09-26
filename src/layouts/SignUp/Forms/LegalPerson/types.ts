export type LegalPersonProps = {
  onUpdateFormStep: () => void;
  onPreviousFormStep: () => void;
};

export type SignUpFormValues = {
  company_name: string;
  email: string;
  email_confirmation: string;
  password: string;
  password_confirmation: string;
};
