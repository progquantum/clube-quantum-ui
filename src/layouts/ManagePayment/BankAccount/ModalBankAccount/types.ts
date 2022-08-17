export type ModalBankAccountProps = {
    onClose: () => void,
    onRefetch?: () => void
}

export type ModalBankAccountFormProps = {
    current_account: string
    current_account_check_number?: string
    holder_name: string
}
