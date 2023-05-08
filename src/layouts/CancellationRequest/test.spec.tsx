import { render, screen } from '@testing-library/react';

import { Request } from './Request';
import { Request as RequestType } from './Request/types';
import { ProviderMock } from '../../../__test__/__mocks__/provider';
import { RequestInfo } from './RequestInfo';

describe('CancellationRequest', () => {
  afterEach(() => jest.clearAllMocks());

  it(' should render one request properly and show the correct color of status', () => {
    const mockedRequest: RequestType = {
      name: 'Test User',
      id: '123',
      contractId: '456',
      requestDate: '05/05/2023',
      planName: 'Test Plan',
      birthDate: '05/05/2023',
      email: 'test@test.test',
      requestStatus: 'verified',
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

    expect(screen.getByText('Test Plan')).toBeInTheDocument();
    expect(requestStatusComponent).toBeInTheDocument();
    expect(stylesRequestStatusComponent.color).toBe('rgb(0, 200, 81)');
  });

  it(' should render the correct plan name', () => {
    const mockedRequestInfo = {
      contractName: 'Test Plan',
      contractDocumentKey: '123',
      contractType: 'Test Plan',
      birthDate: '05/05/2023',
      email: 'test@test.test',
      productName: 'Generic Plan',
      phoneNumber: '999999999',
      areaCode: '99',
      monthlyFee: 44.9,
      acquisitionDate: '05/05/2023',
      cancellationJustification: 'teste',
    };

    render(
      <ProviderMock>
        <RequestInfo
          requestInfo={mockedRequestInfo}
          removeSelectedRequest={jest.fn()}
        />
      </ProviderMock>,
    );

    expect(screen.getByText('Generic Plan')).toBeInTheDocument();
  });
});
