import { User } from 'shared/apiSchema'

export type SignInCredentials = {
  login: string;
  password: string;
}

export type AuthStateContextData = {
  user: User;
  token: string | null;
  loading: boolean;
}

export type AuthDispatchContextData = {
  signIn: (credentials: SignInCredentials) => void;
  signOut: () => void;
}
