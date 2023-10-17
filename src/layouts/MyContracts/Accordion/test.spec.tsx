import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Contract } from 'hooks/useContracts/useFindContractByUserId/types';

import { ProviderMock } from '../../../../__test__/__mocks__/provider';
import Accordion from '.';

describe('Accordion', () => {
  afterEach(() => jest.clearAllMocks());

  it(' should open the accordion and render the correct arrow icon', () => {
    const contract: Contract = {
      id: '1',
      user_id: '1',
      document_key: '1',
      plan_name: 'Test Plan',
      date_of_acquisition: '03/05/2023',
      file_name: 'test file name',
      marketplace_subscription_id: '1',
      request_cancellation: [
        {
          cancelled_status: 'PENDING',
        },
      ],
      cancelled_at: '31/05/2023',
    };

    const contracts = [contract];
    render(
      <ProviderMock>
        <Accordion contracts={contracts} getSelectedContract={jest.fn()} />
      </ProviderMock>,
    );

    waitFor(() => {
      const arrowDropleft = screen.getByTestId('arrowDropleft');
      const contractComponent = screen.getByText('Test Plan');
      const arrowDropDown = screen.getByTestId('arrowDropDown');

      expect(arrowDropleft).toBeInTheDocument();
      expect(arrowDropDown).not.toBeInTheDocument();
      expect(contractComponent).toBeInTheDocument();
      expect(screen.getByText('03/05/2023')).toBeInTheDocument();

      const accordion = screen.getByTestId('accordion');

      expect(arrowDropDown).toBeInTheDocument();

      fireEvent.click(accordion);
    });
  });
});
