import { Suspense } from 'react';

import { useUserProfile } from 'hooks/user/useUserProfile';

import { getUserImagePlaceholder } from './utils';
import { AvatarProps } from './types';
import * as S from './styles';

export function Avatar({ width, height }: AvatarProps) {
  const { data: user } = useUserProfile();

  return (
    <Suspense>
      <S.ProfileImage
        src={user?.avatar_url}
        width={width}
        height={height}
        alt={user?.name}
        title={user?.name}
        fallbackSrc={getUserImagePlaceholder(user?.name)}
      />
    </Suspense>
  );
}
