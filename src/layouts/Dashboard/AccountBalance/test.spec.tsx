import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { AccountBalance } from '.';
import { ProviderMock } from '../../../../__test__/__mocks__/provider';

describe('Account Balance', () => {
  afterEach(() => jest.clearAllMocks);

  it('should not render any value', () => {
    render(
      <ProviderMock>
        <AccountBalance
          title="Saldo em conta"
          description="Será transferido em 15/05/2023"
          value="R$ 500,00"
        />
      </ProviderMock>,
    );

    expect(screen.getByText('.....')).toBeVisible();
  });

  it('should render the correct account balance', () => {
    render(
      <ProviderMock>
        <AccountBalance
          title="Saldo em conta"
          description="Será transferido em 15/05/2023"
          value="R$ 500,00"
        />
      </ProviderMock>,
    );

    const EyeButton = screen.getByRole('button');

    waitFor(() => fireEvent.click(EyeButton));

    expect(screen.getByText('R$ 500,00')).toBeVisible();
  });
});
