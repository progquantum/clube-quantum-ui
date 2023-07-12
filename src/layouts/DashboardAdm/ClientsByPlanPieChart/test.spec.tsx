import { render } from '@testing-library/react';

import { ProviderMock } from '../../../../__test__/__mocks__/provider';
import { ClientsByPlanPieChart } from '.';
import { mockedClientsByPlan } from '../../../../__test__/__mocks__/mockedData/clientsByPlanPieChart';
import { MockResizeObserver } from '../../../../__test__/__mocks__/resizeObserver';

window.ResizeObserver = MockResizeObserver as typeof ResizeObserver;

describe('Clients By Plan Pie Chart', () => {
  beforeAll(() => {
    jest
      .spyOn(HTMLElement.prototype, 'clientHeight', 'get')
      .mockReturnValue(100);
    jest
      .spyOn(HTMLElement.prototype, 'clientWidth', 'get')
      .mockReturnValue(100);
  });
  it(' should render the PieChart component', () => {
    const { getByText } = render(
      <ProviderMock>
        <ClientsByPlanPieChart clientsPerPlan={mockedClientsByPlan} />
      </ProviderMock>,
    );

    const pieChart = getByText(/clientes por plano/i);
    expect(pieChart).toBeInTheDocument();
  });
});
