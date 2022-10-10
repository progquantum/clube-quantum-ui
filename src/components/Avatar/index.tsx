import { Suspense } from 'react';

import { useGetProfile } from 'hooks/useFindMeProfile';

import { AvatarProps } from './types';
import * as S from './styles';
import { getUserImagePlaceholder } from './utils';

export function Avatar({ width, height }: AvatarProps) {
  const { data: user } = useGetProfile({
    refetchOnWindowFocus: false,
  });

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
