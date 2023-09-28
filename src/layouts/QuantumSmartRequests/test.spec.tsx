import { render } from '@testing-library/react';

import { QuantumSmartRequestsPage } from '.';
import { setup as login } from '../../../__test__/__mocks__/login';
import { ProviderMock } from '../../../__test__/__mocks__/provider';

describe('QuantumSmartRequests', () => {
  beforeEach(async () => {
    await login();
  });
  it(' should render the items given by props', () => {
    const mockedData = [
      {
        name: 'Rafael Almeida',
        requestId: '09S8G12',
        requestDate: new Date(),
        productName: 'Contrato TIM 10GB',
        birthDate: new Date(),
        email: 'rafaelgaelteixeira@maptec.com',
        requestStatus: 'ACCEPTED',
      },
      {
        name: 'Rafael Almeida',
        requestId: '09S8G12',
        requestDate: new Date(),
        productName: 'Contrato TIM 10GB',
        birthDate: new Date(),
        email: 'rafaelgaelteixeira@maptec.com',
        requestStatus: 'DENIED',
      },
      {
        name: 'Rafael Almeida',
        requestId: '09S8G12',
        requestDate: new Date(),
        productName: 'Contrato TIM 10GB',
        birthDate: new Date(),
        email: 'rafaelgaelteixeira@maptec.com',
        requestStatus: 'ACCEPTED',
      },
    ];
    const { getAllByText } = render(
      <ProviderMock>
        <QuantumSmartRequestsPage />
      </ProviderMock>,
    );

    const allRequests = getAllByText('Rafael Almeida');

    expect(allRequests.length).toBe(3);
  });

  it(' should show the loading component when request is loading', () => {
    const { getByTestId } = render(
      <ProviderMock>
        <QuantumSmartRequestsPage />
      </ProviderMock>,
    );

    const loader = getByTestId('loader');

    expect(loader).toBeInTheDocument();
  });
});
