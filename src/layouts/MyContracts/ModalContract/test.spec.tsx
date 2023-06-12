import { render, screen } from '@testing-library/react';

import { useGetLoggedUser } from 'hooks/me/useGetLoggedUser';

import { useGetContractByKey } from 'hooks/useContracts/useGetContractByKey';

import { ProviderMock } from '../../../../__test__/__mocks__/provider';
import { ModalContract } from '.';
import { mockedLoggedUser } from '../../../../__test__/__mocks__/mockedData/loggedUser';
import { mockedContractByKey } from '../../../../__test__/__mocks__/mockedData/getContractByKey';

jest.mock('hooks/me/useGetLoggedUser');
jest.mock('hooks/useContracts/useGetContractByKey');

describe('ModalContract', () => {
  beforeEach(() => {
    (useGetLoggedUser as jest.Mock).mockReturnValue({
      data: mockedLoggedUser,
      isloading: false,
      iserror: false,
      issuccess: false,
    });
    (useGetContractByKey as jest.Mock).mockReturnValue({
      data: mockedContractByKey,
      isloading: false,
      iserror: false,
      issuccess: false,
    });
  });

  afterEach(() => jest.clearAllMocks());

  it('should render properly', () => {
    const contract = {
      id: '1',
      user_id: '1',
      document_key: '1',
      plan_name: 'Test Plan',
      date_of_acquisition: '03/05/2023',
      file_name: 'test file name',
      marketplace_subscription_id: '1',
      justification: 'teste',
      cancelled_at: '31/05/2023',
      cancelled_status: 'PENDING',
    };
    render(
      <ProviderMock>
        <ModalContract
          onRequestClose={jest.fn()}
          onRequestModalCancel={jest.fn()}
          contract={contract}
        />
      </ProviderMock>,
    );

    expect(screen.getByText('Plano Test Plan')).toBeInTheDocument();
  });
});
