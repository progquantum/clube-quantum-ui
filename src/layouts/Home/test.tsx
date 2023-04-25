import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import { AppProvider } from 'contexts';

import createMockRouter from 'test-utils/createMockRouter';

import { MockBroadcastChannel } from '../../../__test__/__mocks__/broadcast';

import { HomePage } from '.';

(global as any).BroadcastChannel = MockBroadcastChannel;

describe('Home page', () => {
  it('should render properly', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <AppProvider>
          <HomePage />
        </AppProvider>
      </RouterContext.Provider>,
    );

    const heading = screen.getByRole('heading', {
      name: /Com o Quantum volta!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
