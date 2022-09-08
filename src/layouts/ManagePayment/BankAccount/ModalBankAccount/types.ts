export type ModalBankAccountProps = {
    isOpen: boolean
    onRequestClose: () => void
    onRefetch?: () => void
    onRequestCloseNewModal: () => void
}

export type ModalBankAccountFormProps = {
    current_account: string
    current_account_check_number?: string
    holder_name: string
}
