import { useMemo, useCallback, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { useLocalStorage } from '@rehooks/local-storage'

import { User } from 'shared/apiSchema'
import { USER_STORAGE_KEY, TOKEN_STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY } from 'constants/storage'
import { useSignIn } from 'hook/auth/useSignIn'

import { AuthStateProvider, AuthDispatchProvider } from './AuthContext'
import { SignInCredentials } from './types'

export function AuthProvider ({ children }: PropsWithChildren<unknown>) {
  const { mutate: signIn, isLoading: loading } = useSignIn()

  const [user, setUser, deleteUser] = useLocalStorage<User>(
    USER_STORAGE_KEY,
    {} as User
  )

  const [token, setToken, deleteToken] = useLocalStorage(
    TOKEN_STORAGE_KEY,
    ''
  )

  const [, setRefreshToken, deleteRefreshToken] = useLocalStorage(
    REFRESH_TOKEN_STORAGE_KEY,
    ''
  )

  const handleSignIn = useCallback(({ login, password }: SignInCredentials) => {
    signIn({ login, password }, {
      onSuccess: (data) => {
        const router = useRouter()

        setUser(data.user)
        setToken(data.token)
        setRefreshToken(data.refresh_token)

        router.push('/dashboard')
      }
    })
  },
  [
    signIn,
    setUser,
    setToken,
    setRefreshToken
  ]
  )

  const signOut = useCallback(() => {
    deleteUser()
    deleteToken()
    deleteRefreshToken()
  }, [
    deleteUser,
    deleteToken,
    deleteRefreshToken
  ])

  const authState = useMemo(
    () => ({
      user,
      token,
      loading
    }),
    [
      token,
      user,
      loading
    ]
  )

  const authDispatch = useMemo(
    () => ({
      signIn: handleSignIn,
      signOut
    }),
    [
      handleSignIn,
      signOut
    ]
  )

  return (
    <AuthStateProvider value={authState}>
      <AuthDispatchProvider value={authDispatch}>
        {children}
      </AuthDispatchProvider>
    </AuthStateProvider>
  )
}
