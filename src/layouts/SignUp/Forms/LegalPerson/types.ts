export type LegalPersonProps = {
  onUpdateFormStep: () => void
}

export type FormData = {
  company_name: string,
  email: string,
  email_confirmation: string,
  password: string,
  password_confirmation: string
}
