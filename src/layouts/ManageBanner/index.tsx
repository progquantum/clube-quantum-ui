/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';

import { MdClose } from 'react-icons/md';

import { ChangeEvent, useRef, useState } from 'react';

import { DashboardLayout } from 'layouts/DashboardLayout';

import { Button } from 'components/Button';

import { modalDelete } from 'components/ModalDelete';

import * as S from './styles';

export function ManageBannerPage() {
  const [photos, setPhotos] = useState<Array<FormData | number>>(
    Array.from(Array(6).keys()),
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files[0];
    const newArray = [...photos];
    const formData = new FormData();
    formData.set('file', file);
    newArray[index] = formData;
    setPhotos(newArray);
  };

  const removeBannerFromArray = (index: number) => {
    modalDelete(
      'Você tem certeza que deseja remover este banner ??',
      null,
    ).then(result => {
      if (result.isConfirmed) {
        const newArray = [...photos];
        newArray[index] = index;
        setPhotos(newArray);
      }
    });
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  console.log(photos);

  return (
    <DashboardLayout>
      <S.Container>
        <S.Title>Gerenciar Banner</S.Title>
        <S.UploadPhotoContainer>
          {Array.from({ length: 6 }, (_, index) => (
            <S.UploadPhotoBox
              key={'upload-photo-container'.concat(String(index))}
            >
              <Image
                src="/images/upload-photo.png"
                width="150"
                height="131"
                priority
                style={{ marginTop: '20px' }}
                alt="Upload photo icon"
              />
              <S.FileInputWrapper>
                <S.FileInputButton onClick={handleClick}>
                  Adicionar fotos
                </S.FileInputButton>
                <S.ActualFileInput
                  ref={fileInputRef}
                  id="fupload"
                  name="fupload"
                  type="file"
                  accept="image/*"
                  onChange={e => handleChange(e, index)}
                />
              </S.FileInputWrapper>
              <MdClose size={24} onClick={() => removeBannerFromArray(index)} />
            </S.UploadPhotoBox>
          ))}
        </S.UploadPhotoContainer>
        <S.ButtonContainer>
          <Button type="button" variant="secondary">
            Cancelar
          </Button>
          <Button type="button">Finalizar</Button>
        </S.ButtonContainer>
      </S.Container>
    </DashboardLayout>
  );
}
