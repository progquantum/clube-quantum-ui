import { fireEvent, render, waitFor } from '@testing-library/react';

import { useMe } from 'hooks/me/useMe';

import { PlanSummary } from '.';
import { ProviderMock } from '../../../../__test__/__mocks__/provider';
import { mockUser } from '../../../../__test__/__mocks__/mockedData/user';

jest.mock('hooks/me/useMe');

describe('PlanSummary', () => {
  beforeEach(() => {
    (useMe as jest.Mock).mockReturnValueOnce({
      data: mockUser,
      isLoading: false,
      isError: false,
      isSuccess: true,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render the plan summary', () => {
    const { getByText } = render(
      <ProviderMock>
        <PlanSummary />
      </ProviderMock>,
    );

    expect(getByText(/quantum gratuito/i)).toBeInTheDocument();
    expect(getByText(/Ganhará/i)).toBeInTheDocument();
  });

  it('should render the full advantage text', () => {
    const { getByText } = render(
      <ProviderMock>
        <PlanSummary />
      </ProviderMock>,
    );

    waitFor(() => {
      const advantage = getByText(/condições/i);
      fireEvent.click(advantage);
    });

    waitFor(() => {
      expect(
        getByText(
          /Condições: Utilização do Cartão BANCO UM VISA, em compras com transações totalizando(soma das transações) no valor mínimo de R$ 500,00 no mês anterior./i,
        ),
      ).toBeInTheDocument();
    });
  });
});
