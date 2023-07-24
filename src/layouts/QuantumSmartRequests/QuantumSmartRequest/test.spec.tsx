import { render } from '@testing-library/react';

import { setup as login } from '../../../../__test__/__mocks__/login';
import { ProviderMock } from '../../../../__test__/__mocks__/provider';
import { QuantumSmartRequest } from '.';

describe('Quantum Smart Request', () => {
  beforeEach(async () => {
    await login();
  });

  it(' should render properly all the information about a request', () => {
    const mockedData = {
      name: 'Rafael Almeida',
      requestId: '09S8G12',
      requestDate: new Date(),
      productName: 'Contrato TIM 10GB',
      birthDate: new Date(),
      email: 'rafaelgaelteixeira@maptec.com',
      requestStatus: 'ACCEPTED',
    };

    const { getByText } = render(
      <ProviderMock>
        <QuantumSmartRequest request={mockedData} />
      </ProviderMock>,
    );

    const title = getByText('Rafael Almeida');
    const status = getByText('Compra Aceita');

    expect(title).toBeInTheDocument();
    expect(status).toBeInTheDocument();
  });
});
