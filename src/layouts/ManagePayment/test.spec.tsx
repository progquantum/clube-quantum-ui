import { render, waitFor } from '@testing-library/react';

import { useWallet } from 'hooks/me/useWallet';

import { setup as login } from '../../../__test__/__mocks__/login';
import { ProviderMock } from '../../../__test__/__mocks__/provider';
import { ManagePaymentPage } from '.';

jest.mock('hooks/me/useWallet');

describe('ManagePayment', () => {
  beforeAll(async () => await login());
  beforeEach(() => {
    const mockWallet = {
      credit_card: {
        last_digits: '5522',
        brand: 'visa',
        expiration_date: '06/2027',
      },
      bank_account: {
        bank_code: '396',
        bank_name: 'Banco Um',
        agency: '0001',
        holder_name: 'Joao Silva',
        current_account: '00000005',
        current_account_check_number: '3',
      },
    };

    (useWallet as jest.Mock).mockReturnValueOnce({
      data: mockWallet,
      isLoading: false,
      isError: false,
      isSuccess: true,
    });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render the ManagePayment', async () => {
    const { getByText } = render(
      <ProviderMock>
        <ManagePaymentPage />
      </ProviderMock>,
    );
    await waitFor(() => {
      const bankCode = getByText(/396/i);
      expect(bankCode).toBeInTheDocument();
      const cardLastDig = getByText(/5522/i);
      expect(cardLastDig).toBeInTheDocument();
      const clientName = getByText(/Joao Silva/i);
      expect(clientName).toBeInTheDocument();
    });
  });
});
