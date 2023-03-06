import { DashboardLayout } from 'layouts/DashboardLayout';

import { useUserProfile } from 'hooks/user/useUserProfile';

import { Loader } from 'components/Loader';

import { UploadAvatar } from './Avatar';
import { Profile } from './Profile';
import { Address } from './Address';
import { Password } from './Password';
import * as S from './styles';

export function UpdateUserAccountPage() {
  const { isLoading } = useUserProfile();

  return (
    <DashboardLayout>
      {isLoading ? (
        <Loader />
      ) : (
        <S.ColumnGrid>
          <S.FLex>
            <UploadAvatar />
            <Profile />
          </S.FLex>
          <S.FLex>
            <Address />
            <Password />
          </S.FLex>
        </S.ColumnGrid>
      )}
    </DashboardLayout>
  );
}
