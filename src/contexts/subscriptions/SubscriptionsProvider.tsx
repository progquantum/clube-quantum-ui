import { PropsWithChildren, useMemo, useState } from 'react'

import { SubscriptionsDispatchProvider, SubscriptionsStateProvider } from './SubscriptionsContext'

import { BankAccount, CreditCard, Plans } from './types'

export function SubscriptionsProvider ({ children }: PropsWithChildren<unknown>) {
  const [plan, setPlan] = useState<Plans>({} as Plans)
  const [bankAccount, setBankAccount] = useState<BankAccount>()
  const [creditCard, setCreditCard] = useState<CreditCard>()

  const handleRegisterPlan = (data: Plans) => {
    setPlan(data)
  }

  const subscriptionsState = useMemo(
    () => ({
      plan,
      bankAccount,
      creditCard
    }),
    [
      plan,
      bankAccount,
      creditCard
    ]
  )

  const subscriptionsDispatch = useMemo(
    () => ({
      registerPlan: handleRegisterPlan,
      registerBankAccount: setBankAccount,
      registerCreditCard: setCreditCard
    }),
    [
      handleRegisterPlan,
      setBankAccount,
      setCreditCard
    ]
  )

  return (
    <SubscriptionsStateProvider value={subscriptionsState}>
      <SubscriptionsDispatchProvider value={subscriptionsDispatch}>
        {children}
      </SubscriptionsDispatchProvider>
    </SubscriptionsStateProvider>
  )
}
