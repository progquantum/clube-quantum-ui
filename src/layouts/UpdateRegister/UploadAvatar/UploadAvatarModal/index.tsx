import Image from 'next/image';
import Modal from 'react-modal';
import { RiImageAddLine } from 'react-icons/ri';
import { ChangeEvent, FormEvent, useState } from 'react';

import { useQueryClient } from 'react-query';

import { QUERY_KEY_ME_PROFILE } from 'hooks/useFindMeProfile';
import { useUpdateAvatar } from 'hooks/useUpdateAvatar';

import { error } from 'helpers/notify/error';
import { success } from 'helpers/notify/success';

import { Button } from 'components/Button';

import { CloseModal } from 'components/CloseModal';

import { avatarModalProps } from './types';
import * as S from './styles';

export function UploadAvatarModal({
  isOpen,
  onRequestClose,
}: avatarModalProps) {
  const [imgPreview, setImgPreview] = useState<string>('');
  const [imageFile, setImageFile] = useState(null);

  const { mutateAsync: putAvatar, isLoading: loading } = useUpdateAvatar();
  const queryClient = useQueryClient();

  const handleCloseModal = () => {
    onRequestClose();
    setImgPreview(null);
  };

  const handleImgPreview = (event: ChangeEvent<HTMLInputElement>) => {
    const newImg = event.target.files[0];

    const imgSize = event.target.files[0].size;
    const allowedSize = 5242880; // 5mb

    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    if (
      event.target.files.length &&
      allowedTypes.includes(newImg.type) &&
      imgSize <= allowedSize
    ) {
      setImgPreview(URL.createObjectURL(newImg));
      setImageFile(newImg);
    } else {
      error('Arquivo não suportado');
    }
  };

  const handleUpdateAvatar = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', imageFile);

    await putAvatar(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY_ME_PROFILE);
        success('Foto atualizada com sucesso');
        handleCloseModal();
      },
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className="react-modal-container"
      overlayClassName="react-modal-overlay"
    >
      <S.Container>
        <h3>Alterar imagem do perfil</h3>
        {imgPreview ? (
          <S.ImagePrev src={imgPreview} />
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

          {imgPreview && (
            <Button
              type="submit"
              loading={loading}
              disabled={loading}
              onClick={e => handleUpdateAvatar(e)}
            >
              Salvar
            </Button>
          )}
          <CloseModal onClick={handleCloseModal} />
        </S.AvatarForm>
      </S.Container>
    </Modal>
  );
}
