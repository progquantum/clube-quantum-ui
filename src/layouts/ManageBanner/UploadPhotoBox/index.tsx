/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import { MdClose } from 'react-icons/md';
import { FiEdit3 } from 'react-icons/fi';

import { useQueryClient } from 'react-query';

import { useWindowSize } from 'react-use';

import { error } from 'helpers/notify/error';

import { modalDelete } from 'components/ModalDelete';

import { useBannersUpload } from 'hooks/banners/useBannersUpload';

import { success } from 'helpers/notify/success';

import { QUERY_KEY_BANNERS_FIND_ALL } from 'hooks/banners/useBannersFindAll';

import { Button } from 'components/Button';

import { useDeleteBanners } from 'hooks/banners/useDeleteBanners';

import * as S from './styles';
import { UploadPhotoBoxProps } from './types';

export function UploadPhotoBox({ data }: UploadPhotoBoxProps) {
  const { mutateAsync: uploadBanner, isLoading: loading } = useBannersUpload();
  const { mutate: deleteImg } = useDeleteBanners(data?.id);
  const [isImgAvatar, setImgPreview] = useState<string>('');
  const [isIdPreview, setIdPreview] = useState<string>('');
  const [imgUploaded, setImgUploaded] = useState(null);
  const [inputKey, setInputKey] = useState(0);
  const queryClient = useQueryClient();
  const { width } = useWindowSize();

  useEffect(() => {
    if (data === undefined) {
      setImgPreview('');
      setImgUploaded(null);
      setIdPreview('');
    }
  }, []);

  const handleChangePreview = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files[0];

    const currentFile = e.target.files[0].size;
    const allowedSize = 5242880; // 5mb
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    const allowedImageFormats =
      e.target.files.length &&
      allowedTypes.includes(file.type) &&
      currentFile <= allowedSize;

    if (allowedImageFormats) {
      setImgPreview(URL.createObjectURL(file));
      setImgUploaded(file);
      setInputKey(prevKey => prevKey + 1);
    }

    if (!allowedImageFormats) return error('Arquivo não suportado');
  };

  const handleCreateImage = async (e: FormEvent) => {
    e.preventDefault();

    await uploadBanner(
      {
        file: imgUploaded,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEY_BANNERS_FIND_ALL);
          setImgPreview('');
          setImgUploaded(null);
          success('Banner enviado com sucesso!');
        },
      },
    );
  };

  const handleUpdateImage = async (e: FormEvent, id: string) => {
    e.preventDefault();

    await uploadBanner(
      {
        file: imgUploaded,
        image_id: id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEY_BANNERS_FIND_ALL);
          setImgPreview('');
          setImgUploaded(null);
          setIdPreview('');
          success('Banner atualizado com sucesso!');
        },
      },
    );
  };

  const removeBannerFromArray = () => {
    modalDelete(
      'Você tem certeza que deseja remover este banner ??',
      null,
    ).then(result => {
      if (result.isConfirmed) {
        deleteImg(undefined, {
          onSuccess: () => {
            queryClient.invalidateQueries(QUERY_KEY_BANNERS_FIND_ALL);
            success('Banner deletado com sucesso!');
          },
        });
      }
    });
  };

  const removePreview = () => {
    setImgPreview('');
    setImgUploaded(null);
    setIdPreview('');
  };

  if (data) {
    return (
      <S.UploadPhotoBox
        style={{
          padding: isImgAvatar && isIdPreview === data.id ? undefined : '0',
        }}
      >
        {isImgAvatar && isIdPreview === data.id ? (
          <Image src={isImgAvatar} width={250} height={131} alt="img preview" />
        ) : (
          <>
            <Image
              src={data.url}
              width={width < 375 ? '310' : '357'}
              height="203"
              priority
              alt="banner image"
            />
            <MdClose
              style={{ position: 'absolute' }}
              size={24}
              onClick={() => removeBannerFromArray()}
            />
            <div className="edit">
              <label htmlFor={`update${data.id}`}>
                <FiEdit3 size={24} />
              </label>
              <S.ActualFileInput
                type="file"
                name={`update${data.id}`}
                id={`update${data.id}`}
                key={inputKey}
                onChange={e => {
                  handleChangePreview(e);
                  setIdPreview(data.id);
                }}
              />
            </div>
          </>
        )}

        {isImgAvatar && isIdPreview === data.id && (
          <>
            <Button
              type="submit"
              loading={loading}
              disabled={loading}
              style={{
                width: '135px',
                height: '26px',
                borderRadius: '8px',
                marginTop: '10px',
              }}
              onClick={e => handleUpdateImage(e, data.id)}
            >
              Salvar
            </Button>
            <MdClose
              style={{ position: 'absolute' }}
              size={24}
              onClick={() => removePreview()}
            />
          </>
        )}
      </S.UploadPhotoBox>
    );
  }

  return (
    <S.UploadPhotoBox>
      {isImgAvatar ? (
        <Image src={isImgAvatar} width={250} height={131} alt="img preview" />
      ) : (
        <Image
          src="/images/upload-photo.png"
          width="80"
          height="69"
          priority
          alt="Upload photo icon"
        />
      )}
      <S.FileInputWrapper>
        {isImgAvatar ? (
          <Button
            type="submit"
            loading={loading}
            disabled={loading}
            style={{
              width: '135px',
              height: '26px',
              borderRadius: '8px',
              marginTop: '10px',
            }}
            onClick={e => handleCreateImage(e)}
          >
            Salvar
          </Button>
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <S.FileInputButton htmlFor="create">
              Adicionar fotos
            </S.FileInputButton>
            <span>Dimensão: 642px X 321px</span>
            <span>Jpeg, Jpg e Png. Limite Máximo: 15MB</span>
          </div>
        )}
        <S.ActualFileInput
          type="file"
          name="create"
          id="create"
          key={inputKey}
          onChange={e => handleChangePreview(e)}
        />
      </S.FileInputWrapper>
      {isImgAvatar && (
        <MdClose
          style={{ position: 'absolute' }}
          size={24}
          onClick={() => removePreview()}
        />
      )}
    </S.UploadPhotoBox>
  );
}
