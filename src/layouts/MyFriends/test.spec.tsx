import { render, waitFor } from '@testing-library/react';

import { useFriends } from 'hooks/me/useFriends';

import { useIndirectFriends } from 'hooks/me/useIndirectFriends';

import { useMe } from 'hooks/me/useMe';

import { useIndirectGains } from 'hooks/me/useIndirectGains';

import { setup as login } from '../../../__test__/__mocks__/login';
import { ProviderMock } from '../../../__test__/__mocks__/provider';
import { MyFriendsPage } from '.';
import { mockUser } from '../../../__test__/__mocks__/mockedData/user';

jest.mock('hooks/me/useFriends');
jest.mock('hooks/me/useIndirectFriends');
jest.mock('hooks/me/useMe');
jest.mock('hooks/me/useIndirectGains');

describe('MyFriends', () => {
  beforeAll(async () => await login());
  beforeEach(() => {
    const mockUseFriends = {
      current_page: 1,
      total_pages: 1,
      friends: [
        {
          id: '123',
          name: 'Tiago Silva',
          avatar_url: 'quantum-logo.svg',
          amount_friends: 1,
          inactivated_at: null,
          cashback: 15,
        },
      ],
    };

    (useFriends as jest.Mock).mockReturnValueOnce({
      data: mockUseFriends,
      isLoading: false,
      isError: false,
      isSuccess: true,
    });

    const mockIndirectFriends = {
      indirect_friends_amount: 150,
      indirect_friends_limit_amount: 500,
      total_cashback_this_month_by_indirect_friends: 100,
    };

    (useIndirectFriends as jest.Mock).mockReturnValueOnce({
      data: mockIndirectFriends,
      isLoading: false,
      isError: false,
      isSuccess: true,
    });

    (useMe as jest.Mock).mockReturnValueOnce({
      data: mockUser,
      isLoading: false,
      isError: false,
      isSuccess: true,
    });

    const mockIndirectGains = [
      {
        date: '2023-04-30',
        total: 15,
      },
    ];

    (useIndirectGains as jest.Mock).mockReturnValueOnce({
      data: mockIndirectGains,
      isLoading: false,
      isError: false,
      isSuccess: true,
    });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render the MyFriendsPage', async () => {
    const { getByText } = render(
      <ProviderMock>
        <MyFriendsPage />
      </ProviderMock>,
    );
    await waitFor(() => {
      const friendName = getByText(/Tiago Silva/i);
      expect(friendName).toBeInTheDocument();
      const indirectFriendAmount = getByText(/150/i);
      expect(indirectFriendAmount).toBeInTheDocument();
    });
  });
});
