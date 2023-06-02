import { render } from '@testing-library/react';

import { useGetSalesProgression } from 'hooks/dashboard-pos/useSalesProgression';

import { BarChart } from '.';
import { ProviderMock } from '../../../../__test__/__mocks__/provider';

jest.mock('hooks/dashboard-pos/useSalesProgression');

describe('BarChart', () => {
  beforeEach(() => {
    (useGetSalesProgression as jest.Mock).mockReturnValueOnce({
      data: [],
      isLoading: false,
      isError: false,
      isSuccess: true,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render a chart when data is present', async () => {
    const mockData = [
      { month: 1, total: '100' },
      { month: 2, total: '200' },
      { month: 3, total: '300' },
    ];
    (useGetSalesProgression as jest.Mock).mockReturnValueOnce({
      data: mockData,
      isLoading: false,
      isError: false,
      isSuccess: true,
    });
    const { getByText, getByRole } = render(
      <ProviderMock>
        <BarChart />
      </ProviderMock>,
    );
    setTimeout(() => {
      const title = getByText(/Progressão geral de vendas/i);
      expect(title).toBeInTheDocument();
      const barValue = getByText(/300/i);
      expect(barValue).toBeInTheDocument();
      const bar = getByRole('svg');
      expect(bar).toBeInTheDocument();
    }, 1000);
  });
});
