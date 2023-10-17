import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { ProviderMock } from '../../../../../__test__/__mocks__/provider';
import { Modal } from '.';

describe('Upload Avatar', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render a file input', () => {
    render(
      <ProviderMock>
        <Modal onRequestClose={jest.fn()} />
      </ProviderMock>,
    );

    const uploadPhotoInput = screen.getByText('Selecione uma imagem');
    expect(uploadPhotoInput).toBeInTheDocument();
  });

  it('should upload a photo in file input', () => {
    render(
      <ProviderMock>
        <Modal onRequestClose={jest.fn()} />
      </ProviderMock>,
    );

    URL.createObjectURL = jest.fn();
    const uploadPhotoInput = screen.getByText('Selecione uma imagem');
    const imagePreview = screen.getByRole('img');
    const testAvatar = new File(['test content'], 'test.png', {
      type: 'image/png',
    });

    fireEvent.change(uploadPhotoInput, { target: { files: [testAvatar] } });

    waitFor(() => {
      const avatarPreviewSrc = imagePreview.getAttribute('src');
      expect(avatarPreviewSrc).toEqual(URL.createObjectURL(testAvatar));
    });
  });
});
