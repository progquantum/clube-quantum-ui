import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { ProviderMock } from '../../../../__test__/__mocks__/provider';
import Accordion from '.';

describe('Accordion', () => {
  afterEach(() => jest.clearAllMocks());

  it(' should open the accordion and render the correct arrow icon', () => {
    const contract = {
      id: '1',
      user_id: '1',
      document_key: '1',
      plan_name: 'Test Plan',
      date_of_acquisition: '03/05/2023',
      file_name: 'test file name',
    };

    const contracts = [contract];
    render(
      <ProviderMock>
        <Accordion contracts={contracts} getSelectedContract={jest.fn()} />
      </ProviderMock>,
    );

    const accordion = screen.getByTestId('accordion');
    const arrowDropDown = screen.getByTestId('arrowDropDown');

    expect(arrowDropDown).toBeInTheDocument();

    fireEvent.click(accordion);

    waitFor(() => {
      const arrowDropleft = screen.getByTestId('arrowDropleft');
      const contractComponent = screen.getByText('Test Plan');

      expect(arrowDropleft).toBeInTheDocument();
      expect(arrowDropDown).not.toBeInTheDocument();
      expect(contractComponent).toBeInTheDocument();
      expect(screen.getByText('03/05/2023')).toBeInTheDocument();
    });
  });
});
