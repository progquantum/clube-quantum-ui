import { PropsWithChildren, useMemo, useState } from 'react'

import { PlansDispatchProvider, PlansStateProvider } from './PlansContext'

import { Plans } from './types'

export function PlansProvider ({ children }: PropsWithChildren<unknown>) {
  const [plan, setPlan] = useState<Plans>()

  const authState = useMemo(
    () => ({
      plan
    }),
    [
      plan
    ]
  )

  const authDispatch = useMemo(
    () => ({
      setPlan
    }),
    [
      setPlan
    ]
  )

  return (
    <PlansStateProvider value={authState}>
      <PlansDispatchProvider value={authDispatch}>
        {children}
      </PlansDispatchProvider>
    </PlansStateProvider>
  )
}
