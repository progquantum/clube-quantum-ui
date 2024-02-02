import { useLocalStorage } from '@rehooks/local-storage';
import decode from 'jwt-decode';
import { useRouter } from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useQueryClient } from 'react-query';

import { quantumClientQueue } from 'config/client';
import { SIGN_IN_PAGE } from 'constants/routesPath';
import {
  REFRESH_TOKEN_STORAGE_KEY,
  TOKEN_STORAGE_KEY,
  USER_STORAGE_KEY,
} from 'constants/storage';
import { logOut } from 'helpers/auth/logOut';
import { useSignIn } from 'hooks/auth/useSignIn';
import { TokenPayload, User } from 'shared/types/apiSchema';

import { getMe } from 'hooks/me/useMe';

import { authRedirect } from 'helpers/auth/authRedirect';

import { AuthDispatchProvider, AuthStateProvider } from './AuthContext';
import { SignInCredentials, SignUpData } from './types';

let authChannel: BroadcastChannel;

export function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const [previousPage, setPreviousPage] = useState(null);
  const queryClient = useQueryClient();
  const { mutateAsync: signIn, isLoading: loading } = useSignIn();
  const [registerUser, setRegisterUser] = useState<SignUpData>(
    {} as SignUpData,
  );
  const [user, setUser, deleteUser] = useLocalStorage<User>(
    USER_STORAGE_KEY,
    {} as User,
  );

  const deleteUserRegister = () => setRegisterUser({} as SignUpData);

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
      setRegisterUser(prevState => ({ ...prevState, ...updateRegisterUser }));
    },
    [registerUser],
  );

  const signOut = useCallback(() => {
    deleteUser();
    destroyCookie(undefined, TOKEN_STORAGE_KEY);
    destroyCookie(undefined, REFRESH_TOKEN_STORAGE_KEY);
    queryClient.clear();
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
      deleteUserRegister,
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
