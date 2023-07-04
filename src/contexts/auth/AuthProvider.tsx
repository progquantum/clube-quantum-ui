import {
  useMemo,
  useCallback,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from '@rehooks/local-storage';
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import decode from 'jwt-decode';

import { useSignIn } from 'hooks/auth/useSignIn';
import { TokenPayload, User } from 'shared/types/apiSchema';
import {
  USER_STORAGE_KEY,
  TOKEN_STORAGE_KEY,
  REFRESH_TOKEN_STORAGE_KEY,
  REGISTER_USER_STORAGE_KEY,
} from 'constants/storage';
import { SIGN_IN_PAGE } from 'constants/routesPath';
import { quantumClientQueue } from 'config/client';
import { logOut } from 'helpers/auth/logOut';

import { getMe } from 'hooks/me/useMe';

import { authRedirect } from 'helpers/auth/authRedirect';

import { AuthStateProvider, AuthDispatchProvider } from './AuthContext';
import { SignInCredentials, SignUpData } from './types';

let authChannel: BroadcastChannel;

export function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const [previousPage, setPreviousPage] = useState(null);
  const { mutateAsync: signIn, isLoading: loading } = useSignIn();
  const [registerUser, setRegisterUser] = useLocalStorage<SignUpData>(
    REGISTER_USER_STORAGE_KEY,
    {} as SignUpData,
  );
  const [user, setUser, deleteUser] = useLocalStorage<User>(
    USER_STORAGE_KEY,
    {} as User,
  );

  useEffect(() => {
    authChannel = new BroadcastChannel(`auth`);

    authChannel.onmessage = message => {
      switch (message.data) {
        case `logOut`:
          logOut();
          break;
        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    async function getSession() {
      const cookies = parseCookies();
      const session = cookies[TOKEN_STORAGE_KEY];
      if (session) {
        const user = await getMe();

        setUser(user);
      }
    }

    getSession();
  }, []);

  const router = useRouter();

  const handleSignIn = useCallback(
    ({ login, password }: SignInCredentials) => {
      signIn(
        { login, password },
        {
          onSuccess: data => {
            const { token, refresh_token, user } = data;

            const { user_role } = decode<TokenPayload>(token);

            setCookie(undefined, TOKEN_STORAGE_KEY, token, {
              maxAge: 60 * 60 * 24 * 30,
              path: `/`,
            });

            setCookie(undefined, REFRESH_TOKEN_STORAGE_KEY, refresh_token, {
              maxAge: 60 * 60 * 24 * 30,
              path: `/`,
            });

            setUser(user);

            quantumClientQueue.defaults.headers.common.Authorization = `Bearer ${token}`;

            if (previousPage !== null) {
              router.push(previousPage);
              setPreviousPage(null);
            } else {
              authRedirect(user_role);
            }
          },
        },
      );
    },
    [signIn, setUser, previousPage],
  );

  const handleSignUp = useCallback(
    (updateRegisterUser: SignUpData) => {
      setRegisterUser({
        ...registerUser,
        ...updateRegisterUser,
      });
    },
    [registerUser],
  );

  const signOut = useCallback(() => {
    deleteUser();
    destroyCookie(undefined, TOKEN_STORAGE_KEY);
    destroyCookie(undefined, REFRESH_TOKEN_STORAGE_KEY);

    router.push(SIGN_IN_PAGE);
  }, [deleteUser]);

  const authState = useMemo(
    () => ({
      user,
      loading,
      registerUser,
      previousPage,
    }),
    [user, loading, registerUser],
  );

  const authDispatch = useMemo(
    () => ({
      signIn: handleSignIn,
      signUp: handleSignUp,
      signOut,
      setPreviousPage,
    }),
    [handleSignIn, handleSignUp, signOut],
  );

  return (
    <AuthStateProvider value={authState}>
      <AuthDispatchProvider value={authDispatch}>
        {children}
      </AuthDispatchProvider>
    </AuthStateProvider>
  );
}
