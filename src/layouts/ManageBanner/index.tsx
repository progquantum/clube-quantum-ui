/* eslint-disable jsx-a11y/label-has-associated-control */

import { DashboardLayout } from 'layouts/DashboardLayout';

import { useBannersFindAll } from 'hooks/banners/useBannersFindAll';

import { UploadPhotoBox } from './UploadPhotoBox';
import * as S from './styles';

export function ManageBannerPage() {
  const { data } = useBannersFindAll();

  return (
    <DashboardLayout maxWidth="1136px">
      <S.Container>
        <S.Title>Gerenciar Banner</S.Title>
        <S.UploadPhotoContainer>
          {data?.map(banner => (
            <UploadPhotoBox data={banner} />
          ))}
          {data?.length < 6 && <UploadPhotoBox />}
        </S.UploadPhotoContainer>
      </S.Container>
    </DashboardLayout>
  );
}
