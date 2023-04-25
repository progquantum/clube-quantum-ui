import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import { setCookie } from 'nookies';

import { AppProvider } from 'contexts';

import createMockRouter from 'test-utils/createMockRouter';

import Dashboard from 'pages/dashboard';

import { signIn } from 'hooks/auth/useSignIn';

import {
  REFRESH_TOKEN_STORAGE_KEY,
  TOKEN_STORAGE_KEY,
} from 'constants/storage';

import { quantumClientQueue } from 'config/client';

import { MockBroadcastChannel } from '../../../__test__/__mocks__/broadcast';

(global as any).BroadcastChannel = MockBroadcastChannel;

describe('Dashboard page', () => {
  it('should render properly', async () => {
    const login = '034.740.315-89';
    const password = '12345678';
    const data = await signIn({ login, password });
    const { token, refresh_token } = data;

    setCookie(undefined, TOKEN_STORAGE_KEY, token, {
      maxAge: 60 * 60 * 24 * 30,
      path: `/`,
    });

    setCookie(undefined, REFRESH_TOKEN_STORAGE_KEY, refresh_token, {
      maxAge: 60 * 60 * 24 * 30,
      path: `/`,
    });

    quantumClientQueue.defaults.headers.common.Authorization = `Bearer ${token}`;

    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <AppProvider>
          <Dashboard />
        </AppProvider>
      </RouterContext.Provider>,
    );

    setTimeout(() => {
      const heading = screen.getByRole('heading', {
        name: /Não fique sozinho nessa!/i,
      });

      expect(heading).toBeInTheDocument();
    }, 1000);
  });
});
