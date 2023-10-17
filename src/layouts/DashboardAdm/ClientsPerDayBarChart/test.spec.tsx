import { render } from '@testing-library/react';

import { setup as login } from '../../../../__test__/__mocks__/login';
import { ClientsPerDayBarChart } from '.';
import { MockResizeObserver } from '../../../../__test__/__mocks__/resizeObserver';
import { ProviderMock } from '../../../../__test__/__mocks__/provider';

window.ResizeObserver = MockResizeObserver as typeof ResizeObserver;

jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }) => (
      <OriginalModule.ResponsiveContainer width={800} height={800}>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

describe('ClientsPerDayBarCharts', () => {
  beforeEach(async () => {
    await login();
  });
  it(' should render properly', () => {
    const mockedData = {
      today: 0,
      yesterday: 0,
      dayBeforeYesterday: 0,
      lastSevenDays: 0,
    };
    const { getByText } = render(
      <ProviderMock>
        <ClientsPerDayBarChart clientsPerDay={mockedData} />
      </ProviderMock>,
    );

    const title = getByText(/clientes por dia/i);
    expect(title).toBeInTheDocument();
  });

  it(' should show label name correctly', () => {
    const mockedData = {
      today: 2,
      yesterday: 4,
      dayBeforeYesterday: 6,
      lastSevenDays: 3,
    };

    const { getByText } = render(
      <ProviderMock>
        <ClientsPerDayBarChart clientsPerDay={mockedData} />
      </ProviderMock>,
    );

    const label = getByText('faturamento');
    expect(label).toBeInTheDocument();
  });
});
