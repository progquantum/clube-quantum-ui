import { useContext, createContext } from 'react'

import { SubscriptionsDispatchContextData, SubscriptionsStateContextData } from './types'

export const SubscriptionsStateContext = createContext<
SubscriptionsStateContextData | undefined
>(undefined)

export const SubscriptionsDispatchContext = createContext<
SubscriptionsDispatchContextData | undefined
>(undefined)

export const SubscriptionsStateProvider = SubscriptionsStateContext.Provider
export const SubscriptionsDispatchProvider = SubscriptionsDispatchContext.Provider

export const useSubscriptionsState = () => {
  const context = useContext(SubscriptionsStateContext)
  if (!context) {
    throw new Error('useSubscriptionsState must be used within a AuthProvider')
  }

  return context
}

export const useSubscriptionsDispatch = () => {
  const context = useContext(SubscriptionsDispatchContext)
  if (!context) {
    throw new Error('useSubscriptionsDispatch must be used within a AuthProvider')
  }

  return context
}
