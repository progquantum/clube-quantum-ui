import Image from 'next/image';

import { AiFillCloseCircle } from 'react-icons/ai';

import { ChangeEvent, useState } from 'react';

import { DashboardLayout } from 'layouts/DashboardLayout';

import { Button } from 'components/Button';

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
    const newArray = [...photos];
    newArray[index] = index;
    setPhotos(newArray);
  };

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
                width="118"
                height="118"
                priority
                alt="Upload photo icon"
              />
              <S.FileInput type="file" onChange={e => handleChange(e, index)} />
              <AiFillCloseCircle
                size={24}
                onClick={() => removeBannerFromArray(index)}
              />
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
