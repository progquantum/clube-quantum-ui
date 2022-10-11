import { useImage } from 'react-image';

import { Profile } from 'shared/types/apiSchema';

export function useUserImage(user: Profile) {
  const fallbackSrc = `https://ui-avatars.com/api/?rounded=true&format=svg&background=F5F6FA&color=0E5AE4&name=${user?.name}`;

  const { src: avatarUrl } = useImage({
    srcList: [user?.avatar_url ?? fallbackSrc, fallbackSrc],
    useSuspense: false,
  });

  return avatarUrl;
}
