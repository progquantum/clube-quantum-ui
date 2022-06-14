import { useMemo, useCallback, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { useLocalStorage } from '@rehooks/local-storage'
import { setCookie, destroyCookie } from 'nookies'

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

  const router = useRouter()

  const handleSignIn = useCallback(({ login, password }: SignInCredentials) => {
    signIn({ login, password }, {
      onSuccess: (data) => {
        setCookie(undefined, TOKEN_STORAGE_KEY, data.token, {
          maxAge: 60 * 60 * 24 * 30,
          path: '/'
        })

        setCookie(undefined, REFRESH_TOKEN_STORAGE_KEY, data.refresh_token, {
          maxAge: 60 * 60 * 24 * 30,
          path: '/'
        })

        setUser(data.user)

        router.push('/dashboard')
      }
    })
  },
  [
    signIn,
    setUser
  ])

  const signOut = useCallback(() => {
    deleteUser()
    destroyCookie(undefined, TOKEN_STORAGE_KEY)
    destroyCookie(undefined, REFRESH_TOKEN_STORAGE_KEY)
  },
  [
    deleteUser
  ])

  const authState = useMemo(
    () => ({
      user,
      loading
    }),
    [
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
