export type UserProfileProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export type UserProfileFormProps = {
  name: string;
  birth_date: string;
  phone: string;
  email: string;
};
