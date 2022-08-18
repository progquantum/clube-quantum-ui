import { BillingData } from 'hooks/useBilling/types'

export type ModalConfirmProps = {
  data: BillingData
  onCloseCVC: () => void
  cvc: string
  onOpenSucessful: () => void

}
