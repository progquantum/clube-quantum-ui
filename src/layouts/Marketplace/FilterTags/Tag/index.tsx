import { PropsWithChildren } from 'react';

import * as S from './styles';

export function Tag({ children }: PropsWithChildren) {
  return <S.TagContainer>{children}</S.TagContainer>;
}
