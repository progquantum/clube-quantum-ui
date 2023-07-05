import { render, screen } from '@testing-library/react';

import { Request } from './Request';
import { Request as RequestType } from './Request/types';
import { ProviderMock } from '../../../__test__/__mocks__/provider';
import { RequestInfo } from './RequestInfo';

describe('CancellationRequest', () => {
  afterEach(() => jest.clearAllMocks());

  it(' should render one request properly and show the correct color of status', () => {
    const mockedRequest: RequestType = {
      admin_report: 'admin_report',
      id: 'cdb057c7-0a08-408b-81b7-61ac48c66fc5',
      cancelled_status: 'APPROVED',
      contract: {
        date_of_acquisition: '2023-05-16T14:40:09.415Z',
        document_key: 'cdb057c7-0a08-408b-81b7-61ac48c66fc5',
        marketplace_subscription: {
          price_paid: '44.9',
        },
        plan_name: 'Quantum Smart',

        user: {
          phone: '+55 (71) 99171-3860',
          email: 'log_junior@hotmail.com',
          individual_person: {
            name: 'Carlindo Junior',
            birth_date: '1987-04-01T00:00:00.000Z',
          },
          legal_person: null,
        },
      },
      justification: 'não quero mais',
    };
    render(
      <ProviderMock>
        <Request request={mockedRequest} />
      </ProviderMock>,
    );
    const requestStatusComponent = screen.getByText('Verificado');
    const stylesRequestStatusComponent = getComputedStyle(
      requestStatusComponent,
    );

    expect(screen.getByText('Quantum Smart')).toBeInTheDocument();
    expect(requestStatusComponent).toBeInTheDocument();
    expect(stylesRequestStatusComponent.color).toBe('rgb(0, 200, 81)');
  });

  it(' should render the correct plan name and user name', () => {
    const mockedRequestInfo = {
      admin_report: 'admin_report',
      id: 'cdb057c7-0a08-408b-81b7-61ac48c66fc5',
      cancelled_status: 'APPROVED',
      contract: {
        date_of_acquisition: '2023-05-16T14:40:09.415Z',
        document_key: 'cdb057c7-0a08-408b-81b7-61ac48c66fc5',
        marketplace_subscription: {
          price_paid: '44.9',
        },
        plan_name: 'Quantum Smart',

        user: {
          phone: '+55 (71) 99171-3860',
          email: 'log_junior@hotmail.com',
          individual_person: {
            name: 'Carlindo Junior',
            birth_date: '1987-04-01T00:00:00.000Z',
          },
          legal_person: null,
        },
      },
      justification: 'não quero mais',
    };

    render(
      <ProviderMock>
        <RequestInfo
          requestInfo={mockedRequestInfo}
          removeSelectedRequest={jest.fn()}
        />
      </ProviderMock>,
    );

    expect(screen.getByText('Carlindo Junior')).toBeInTheDocument();
    expect(screen.getByText('não quero mais')).toBeInTheDocument();
  });
});
