import { BillingData } from 'hooks/useBilling/types'

export type ModalConfirmProps = {
  dataBilling: BillingData
  onCloseCVC: () => void
  cvc: string
  onOpenSucessful: () => void
  onOpenError: () => void

}

export type PlansData = {
  id: string,
  name: string,
  cashback_above_own_individual_person: string,
  amount_by_effective_direct_indication: string,
  max_amount_of_effective_indirect_indication: string,
  amount_of_money_per_indirect_referral_with_paid_plan: string,
  can_participate_on_fidelity_program_quantum: boolean,
  value_of_renew_of_paid_plan_on_13_month: string,
  max_amount_of_effective_direct_indication: string,
  amount_of_money_per_direct_referral_with_paid_plan: string,
  has_a_commission_for_each_product_purchased_by_direct_referral: boolean,
  amount_commission_for_each_product_purchased_direct_indication: string,
  has_monthly_fee: boolean,
  minimal_amount_of_transaction_on_last_month: string,
  minimal_amount_of_products_bought_on_last_month: string,
  monthly_price: string,
  semiannual_price: string,
  annual_price: string,
  renovation_price: string,
  promotional_price: string
}
