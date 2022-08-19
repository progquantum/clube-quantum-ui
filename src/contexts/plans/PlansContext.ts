import { useContext, createContext } from 'react'

import { PlansDispatchContextData, PlansStateContextData } from './types'

export const PlansStateContext = createContext<
PlansStateContextData | undefined
>(undefined)
export const PlansDispatchContext = createContext<
PlansDispatchContextData | undefined
>(undefined)

export const PlansStateProvider = PlansStateContext.Provider
export const PlansDispatchProvider = PlansDispatchContext.Provider

export const usePlansState = () => {
  const context = useContext(PlansStateContext)
  if (!context) {
    throw new Error('usePlansState must be used within a AuthProvider')
  }

  return context
}

export const usePlansDispatch = () => {
  const context = useContext(PlansDispatchContext)
  if (!context) {
    throw new Error('usePlansDispatch must be used within a AuthProvider')
  }

  return context
}
