import { render, screen } from '@testing-library/react';

import { useUserProfile } from 'hooks/me/useUserProfile';

import { setup as login } from '../../../__test__/__mocks__/login';

import { AvatarProps } from './types';
import { Avatar } from '.';
import { ProviderMock } from '../../../__test__/__mocks__/provider';

jest.mock('hooks/me/useUserProfile');

describe('Avatar component', () => {
  beforeAll(async () => await login());
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders correctly with user data', async () => {
    const mockedUser = {
      name: 'John Doe',
      avatar_url: 'https://example.com/avatar.jpg',
      birth_date: '01/07/1988',
      phone: '7199875488',
      email: 'john@example.com',
      address: {
        street: 'rua',
        number: '25',
        neighborhood: 'Centro',
        complement: 'casa branca',
        zip_code: '42708830',
        city: 'São Paulo',
        state: 'SP',
        country: 'Brazil',
      },
    };
    (useUserProfile as jest.Mock).mockReturnValueOnce({
      data: mockedUser,
      isLoading: false,
    });

    const props: AvatarProps = {
      width: '50px',
      height: '50px',
    };

    render(
      <ProviderMock>
        <Avatar {...props} />
      </ProviderMock>,
    );

    setTimeout(() => {
      const avatarImage = screen.getByRole('img');
      expect(avatarImage).toHaveAttribute('src', mockedUser.avatar_url);
      expect(avatarImage).toHaveAttribute('alt', mockedUser.name);
      expect(avatarImage).toHaveAttribute('title', mockedUser.name);
    }, 1000);
  });

  it('renders correctly without user data', async () => {
    (useUserProfile as jest.Mock).mockReturnValueOnce({
      data: undefined,
      isLoading: false,
    });

    const props: AvatarProps = {
      width: '50px',
      height: '50px',
    };

    render(
      <ProviderMock>
        <Avatar {...props} />
      </ProviderMock>,
    );
    setTimeout(() => {
      const avatarImage = screen.getByRole('img');
      expect(avatarImage).toHaveAttribute('src');
      expect(avatarImage).toHaveAttribute('alt', '');
      expect(avatarImage).toHaveAttribute('title', '');
    }, 1000);
  });
});
