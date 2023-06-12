import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { useMe } from 'hooks/me/useMe';

import { InviteFriends } from '.';
import { ProviderMock } from '../../../__test__/__mocks__/provider';
import { mockUser } from '../../../__test__/__mocks__/mockedData/data';

jest.mock('hooks/me/useMe');

describe('Invite clipboard', () => {
  beforeEach(() => {
    (useMe as jest.Mock).mockReturnValueOnce({
      data: mockUser,
      isLoading: false,
      isError: false,
      isSuccess: true,
    });
    // Mock the navigator.clipboard API
    Object.defineProperty(window.navigator, 'clipboard', {
      value: {
        readText: jest.fn(() =>
          Promise.resolve('quantum.com.vc/signup?invite-code=123123'),
        ),
        writeText: jest.fn(),
      },
      writable: true,
    });
  });

  afterEach(() => {
    Object.defineProperty(window.navigator, 'clipboard', {
      value: {
        readText: jest.fn(),
        writeText: jest.fn(),
      },
      writable: true,
    });

    jest.clearAllMocks();
  });

  it(' should copy the invite link to clipboard', async () => {
    render(
      <ProviderMock>
        <InviteFriends />
      </ProviderMock>,
    );

    const clipBoardButton = screen.getByText(/Seu link de convite é:/i);

    await waitFor(() => fireEvent.click(clipBoardButton));

    const clipBoardInvite = await window.navigator.clipboard.readText();

    expect(window.navigator.clipboard.writeText).toHaveBeenCalled();
    expect(window.navigator.clipboard.readText).toHaveBeenCalled();

    expect(clipBoardInvite).toEqual('quantum.com.vc/signup?invite-code=123123');
  });
});
