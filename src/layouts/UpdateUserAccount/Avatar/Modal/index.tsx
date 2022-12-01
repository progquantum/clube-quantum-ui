import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useQueryClient } from 'react-query';
import { RiImageAddLine } from 'react-icons/ri';

import { QUERY_KEY_PROFILE } from 'hooks/user/useUserProfile';
import { useUpdateUserAvatar } from 'hooks/user/useUpdateUserAvatar';
import { error } from 'helpers/notify/error';
import { success } from 'helpers/notify/success';
import { Modal as ModalAvatar } from 'components/Modal';
import { Button } from 'components/Button';

import { avatarModalProps } from './types';
import * as S from './styles';

const avatarPreviewBorderRadius = {
  borderRadius: '50%',
};

export function Modal({ onRequestClose }: avatarModalProps) {
  const [isUserAvatar, setIsUserAvatar] = useState<string>('');
  const [avatarUploaded, setAvatarUploaded] = useState(null);

  const { mutateAsync: updateUserAvatar, isLoading: loading } =
    useUpdateUserAvatar();
  const queryClient = useQueryClient();

  const handleCloseModal = () => {
    onRequestClose();
    setIsUserAvatar(null);
  };

  const handleImgPreview = (event: ChangeEvent<HTMLInputElement>) => {
    const newImg = event.target.files[0];

    const currentFile = event.target.files[0].size;
    const allowedSize = 5242880; // 5mb
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    const allowedImageFormats =
      event.target.files.length &&
      allowedTypes.includes(newImg.type) &&
      currentFile <= allowedSize;

    if (allowedImageFormats) {
      setIsUserAvatar(URL.createObjectURL(newImg));
      setAvatarUploaded(newImg);
    }

    if (!allowedImageFormats) return error('Arquivo não suportado');
  };

  const handleUpdateAvatar = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', avatarUploaded);

    await updateUserAvatar(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY_PROFILE);
        success('Foto atualizada com sucesso');
        handleCloseModal();
      },
    });
  };

  return (
    <ModalAvatar onClose={handleCloseModal}>
      <S.Container>
        <h3>Alterar imagem do perfil</h3>

        {isUserAvatar ? (
          <Image
            src={isUserAvatar}
            width={200}
            height={200}
            objectFit="cover"
            style={avatarPreviewBorderRadius}
          />
        ) : (
          <Image src="/images/upload.svg" width={110} height={110} />
        )}

        <p>
          Extensões de arquivo permitidas: JPEG, JPG, PNG. O tamanho máximo do
          arquivo de upload: 5MB.
        </p>
        <S.AvatarForm>
          <S.UploadButton htmlFor="uploadAvatar">
            <RiImageAddLine /> Selecione uma imagem
          </S.UploadButton>

          <S.InputFile
            type="file"
            name="uploadAvatar"
            id="uploadAvatar"
            onChange={handleImgPreview}
          />

          {isUserAvatar && (
            <Button
              type="submit"
              loading={loading}
              disabled={loading}
              onClick={e => handleUpdateAvatar(e)}
            >
              Salvar
            </Button>
          )}
        </S.AvatarForm>
      </S.Container>
    </ModalAvatar>
  );
}
