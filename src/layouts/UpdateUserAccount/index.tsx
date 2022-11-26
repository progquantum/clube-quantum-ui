import { DashboardLayout } from 'layouts/DashboardLayout';

import { UploadAvatar } from './Avatar';
import { Profile } from './Profile';
import { Address } from './Address';
import { Password } from './Password';
import * as S from './styles';

export function UpdateUserAccountPage() {
  return (
    <DashboardLayout>
      <S.ColumnGrid>
        <S.FLex>
          <UploadAvatar />
          <Address />
        </S.FLex>
        <S.FLex>
          <Profile />
          <Password />
        </S.FLex>
      </S.ColumnGrid>
    </DashboardLayout>
  );
}
