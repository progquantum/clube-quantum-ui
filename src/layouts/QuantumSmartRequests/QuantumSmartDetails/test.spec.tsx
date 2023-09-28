import { render } from '@testing-library/react';

import { setup as login } from '../../../../__test__/__mocks__/login';
import { ProviderMock } from '../../../../__test__/__mocks__/provider';
import { QuantumSmartDetails } from '.';

describe('Quantum Smart Details', () => {
  beforeEach(async () => await login());

  const mockedData = {
    id: '123a3d59-2eb1-4ae9-a907-8ffa7298cb52',
    user_id: '7a491cb7-6300-4e99-a66a-aba88b0f2050',
    partner_product_id: '84776ad8-b88f-407f-b0dc-3b222100e183',
    price_paid: '44.9',
    order_id: 'b6ab5cab-1c2c-4f51-bcb2-f83161987468',
    expires_at: String(new Date()),
    subscribed_at: String(new Date()),
    renovation_failures_count: 0,
    monthly_fee: 1,
    is_cancelled: false,
    status: 'APPROVED',
    partner_product: {
      name: 'Quantum Smart',
    },
    user: {
      phone: '+55 (65) 993351317',
      email: 'joao_figueiredao1@scuderiagwr.com.br',
      individual_person: {
        name: 'Joao Heloisao Figueiredo',
        birth_date: String(new Date()),
      },
      legal_person: null,
    },
  };

  it(' should render the quantum smart contract details correctly', () => {
    const mockedOnRequestClose = jest.fn();
    const { getByText } = render(
      <ProviderMock>
        <QuantumSmartDetails
          request={mockedData}
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
          request={mockedData}
          onRequestClose={mockedOnRequestClose}
        />
      </ProviderMock>,
    );

    const title = getByTestId('clickable-title');
    title.click();

    expect(mockedOnRequestClose).toHaveBeenCalled();
  });
});
