import { RouterContext } from 'next/dist/shared/lib/router-context';

import { AppProvider } from 'contexts';

import createMockRouter from 'test-utils/createMockRouter';

import { MockBroadcastChannel } from './broadcast';

(global as any).BroadcastChannel = MockBroadcastChannel;

export const ProviderMock = ({ children }) => (
  <RouterContext.Provider value={createMockRouter({})}>
    <AppProvider>{children}</AppProvider>
  </RouterContext.Provider>
);
