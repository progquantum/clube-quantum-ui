import { render, waitFor } from '@testing-library/react';

import { useUserProfile } from 'hooks/me/useUserProfile';

import { setup as login } from '../../../__test__/__mocks__/login';
import { ProviderMock } from '../../../__test__/__mocks__/provider';

import { UpdateUserAccountPage } from '.';

jest.mock('hooks/me/useUserProfile');

describe('UpdateUserAccount', () => {
  beforeAll(async () => await login());
  beforeEach(() => {
    const mockUser = {
      name: 'João Silva',
      birth_date: '2002-11-15T00:00:00.000Z',
      phone: '71991458755',
      email: 'joao@hotmail.com',
      avatar_url: 'http://localhost:3333/tmp/IMG_1827-Copia-10146.jpeg',
      address: {
        street: 'Alameda dos Guaramomis',
        number: '10118',
        complement: 'Ao lado de uma barbearia',
        neighborhood: 'Planalto Paulista',
        zip_code: '04076906',
        city: 'São Paulo',
        state: 'SP',
        country: 'Brasil',
      },
    };

    (useUserProfile as jest.Mock).mockReturnValue({
      data: mockUser,
      isLoading: false,
      isError: false,
      isSuccess: true,
    });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render the UpdateUserAccount', async () => {
    const { getByText } = render(
      <ProviderMock>
        <UpdateUserAccountPage />
      </ProviderMock>,
    );
    await waitFor(() => {
      const name = getByText(/João Silva/i);
      expect(name).toBeInTheDocument();
      const email = getByText(/joao@hotmail.com/i);
      expect(email).toBeInTheDocument();
      const street = getByText(/Alameda dos Guaramomis/i);
      expect(street).toBeInTheDocument();
    });
  });
});
