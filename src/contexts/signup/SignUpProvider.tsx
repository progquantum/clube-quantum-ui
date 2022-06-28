import { useMemo, useState, useCallback, PropsWithChildren } from 'react'

import { SignUpStateProvider, SignUpDispatchProvider } from './SignUpContext'
import { Data } from './types'

export function SignUpProvider ({ children }: PropsWithChildren<unknown>) {
  const [data, setData] = useState<Data>({})

  const saveData = useCallback((info: Data) => {
    setData({
      ...data,
      ...info
    })
  }, [data])

  const signUpState = useMemo(() => ({
    data
  }), [data])

  const signUpDispatch = useMemo(() => ({
    saveData
  }), [saveData])

  return (
    <SignUpDispatchProvider value={signUpDispatch}>
      <SignUpStateProvider value={signUpState}>
        {children}
      </SignUpStateProvider>
    </SignUpDispatchProvider>
  )
}
