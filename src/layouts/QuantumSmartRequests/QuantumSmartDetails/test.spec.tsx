import { render } from '@testing-library/react';

import { setup as login } from '../../../../__test__/__mocks__/login';
import { ProviderMock } from '../../../../__test__/__mocks__/provider';
import { QuantumSmartDetails } from '.';

describe('Quantum Smart Details', () => {
  beforeEach(async () => await login());

  const mockedData = {
    name: 'Rafael Almeida',
    contractId: '09S8G12',
    birthDate: new Date(),
    email: 'rafaelgaelteixeira@maptec.com.br',
    requestStatus: '',
    product: {
      name: 'Plano TIM 10GB',
      phoneNumber: '9 9921 8371',
      areaCode: '44',
      value: 44.9,
      acquisitionDate: new Date(),
    },
  };

  it(' should render the quantum smart contract details correctly', () => {
    const mockedOnRequestClose = jest.fn();
    const { getByText } = render(
      <ProviderMock>
        <QuantumSmartDetails
          contract={mockedData}
          onRequestClose={mockedOnRequestClose}
        />
      </ProviderMock>,
    );

    const name = getByText('Rafael Almeida');

    expect(name).toBeInTheDocument();
  });

  it(' should call the onRequestClose when the title is clicked', () => {
    const mockedOnRequestClose = jest.fn();
    const { getByTestId } = render(
      <ProviderMock>
        <QuantumSmartDetails
          contract={mockedData}
          onRequestClose={mockedOnRequestClose}
        />
      </ProviderMock>,
    );

    const title = getByTestId('clickable-title');
    title.click();

    expect(mockedOnRequestClose).toHaveBeenCalled();
  });
});
