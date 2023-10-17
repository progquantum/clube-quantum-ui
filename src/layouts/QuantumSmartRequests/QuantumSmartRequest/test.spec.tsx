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
