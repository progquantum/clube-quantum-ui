import { Dispatch } from 'react';

import { User } from 'shared/types/apiSchema';

export type SignInCredentials = {
  login: string;
  password: string;
};

export type SignUpData = {
  [string: string]: string;
};

export type AuthStateContextData = {
  user: User;
  loading: boolean;
  registerUser: SignUpData;
  previousPage: string;
};

export type AuthDispatchContextData = {
  signIn: (credentials: SignInCredentials) => void;
  signOut: () => void;
  signUp: (updateRegisterUser: SignUpData) => void;
  setPreviousPage: Dispatch<any>;
  deleteRegister: () => void;
};
