export type PersonalDataInputsProps = {
  onUpdateFormStep: () => void
}

export type FormData = {
  name: string,
  birth_date: string,
  email: string,
  email_confirmation: string,
  password: string,
  password_confirmation: string
}
