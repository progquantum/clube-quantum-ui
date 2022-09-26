export type IndividualPersonProps = {
  onUpdateFormStep: () => void;
  onPreviousFormStep: () => void;
};

export type SignUpFormValues = {
  name: string;
  birth_date: string;
  email: string;
  email_confirmation: string;
  password: string;
  password_confirmation: string;
};
