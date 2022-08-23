import { PropsWithChildren, useMemo, useState } from 'react'

import { SubscriptionsDispatchProvider, SubscriptionsStateProvider } from './SubscriptionsContext'

import { BankAccount, CreditCard, Plans } from './types'

export function SubscriptionsProvider ({ children }: PropsWithChildren<unknown>) {
  const [plan, setPlan] = useState<Plans>()
  const [bankAccount, setBankAccount] = useState<BankAccount>()
  const [creditCard, setCreditCard] = useState<CreditCard>()

  const authState = useMemo(
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

  const authDispatch = useMemo(
    () => ({
      setPlan,
      setBankAccount,
      setCreditCard
    }),
    [
      setPlan,
      setBankAccount,
      setCreditCard
    ]
  )

  return (
    <SubscriptionsStateProvider value={authState}>
      <SubscriptionsDispatchProvider value={authDispatch}>
        {children}
      </SubscriptionsDispatchProvider>
    </SubscriptionsStateProvider>
  )
}
