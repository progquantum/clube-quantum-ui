import { Profile } from 'shared/types/apiSchema';

export const getUserImagePlaceholder = (username: Profile['name']): string =>
  `https://ui-avatars.com/api/?rounded=true&format=svg&background=F5F6FA&color=0E5AE4&name=${username}`;
