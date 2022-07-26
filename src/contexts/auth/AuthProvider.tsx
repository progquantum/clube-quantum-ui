import { useMemo, useCallback, PropsWithChildren, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useLocalStorage } from '@rehooks/local-storage'
import { setCookie, destroyCookie } from 'nookies'

import { User } from 'shared/types/apiSchema'
import { USER_STORAGE_KEY, TOKEN_STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY } from 'constants/storage'
import { useSignIn } from 'hooks/auth/useSignIn'
import { api } from 'config/client'
import { logOut } from 'helpers/auth/logOut'

import { AuthStateProvider, AuthDispatchProvider } from './AuthContext'
import { SignInCredentials, SignUpData } from './types'

let authChannel: BroadcastChannel

export function AuthProvider ({ children }: PropsWithChildren<unknown>) {
  const { mutate: signIn, isLoading: loading } = useSignIn()
  const [registerUser, setRegisterUser] = useState<SignUpData>(null)

  // eslint-disable-next-line no-console
  console.log(registerUser)

  const [user, setUser, deleteUser] = useLocalStorage<User>(
    USER_STORAGE_KEY,
    {} as User
  )

  useEffect(() => {
    authChannel = new BroadcastChannel('auth')

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'logOut':
          logOut()
          break
        default:
          break
      }
    }
  }, [])

  const router = useRouter()

  const handleSignIn = useCallback(({ login, password }: SignInCredentials) => {
    signIn({ login, password }, {
      onSuccess: (data) => {
        const { token, refresh_token, user } = data

        setCookie(undefined, TOKEN_STORAGE_KEY, token, {
          maxAge: 60 * 60 * 24 * 30,
          path: '/'
        })

        setCookie(undefined, REFRESH_TOKEN_STORAGE_KEY, refresh_token, {
          maxAge: 60 * 60 * 24 * 30,
          path: '/'
        })

        setUser(user)

        api.defaults.headers.common.Authorization = `Bearer ${token}`

        router.push('/dashboard')
      }
    })
  },
  [
    signIn,
    setUser
  ])

  const handleSignUp = useCallback((updateRegisterUser: SignUpData) => {
    setRegisterUser({
      ...registerUser,
      ...updateRegisterUser
    })
  }, [registerUser])

  const signOut = useCallback(() => {
    deleteUser()
    destroyCookie(undefined, TOKEN_STORAGE_KEY)
    destroyCookie(undefined, REFRESH_TOKEN_STORAGE_KEY)

    router.push('/signin')
  },
  [
    deleteUser
  ])

  const authState = useMemo(
    () => ({
      user,
      loading,
      registerUser
    }),
    [
      user,
      loading,
      registerUser
    ]
  )

  const authDispatch = useMemo(
    () => ({
      signIn: handleSignIn,
      signUp: handleSignUp,
      signOut
    }),
    [
      handleSignIn,
      handleSignUp,
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
