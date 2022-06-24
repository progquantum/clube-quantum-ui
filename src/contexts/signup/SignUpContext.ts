import { createContext, useContext } from 'react'

import { SignUpStateContextData, SignUpDispatchContextData } from './types'

export const SignUpStateContext = createContext<SignUpStateContextData | undefined>(
  undefined
)

export const SignUpDispatchContext = createContext<SignUpDispatchContextData| undefined>(
  undefined
)

export const SignUpStateProvider = SignUpStateContext.Provider
export const SignUpDispatchProvider = SignUpDispatchContext.Provider

export function useSignUpState () {
  const context = useContext(SignUpStateContext)

  if (!context) {
    throw new Error('useSignUpState must be used within a SignUpProvider')
  }

  return context
}

export function useSignUpDispatch () {
  const context = useContext(SignUpDispatchContext)

  if (!context) {
    throw new Error('useSignUpDispatch must be used within a SignUpProvider')
  }

  return context
}
