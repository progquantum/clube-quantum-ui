import Image from 'next/image';
import { PropsWithChildren } from 'react';

import * as S from './styles';
import { HeroSectionProps } from './types';

export function HeroLayout({
  children,
  imgSrc,
  imgAlt,
  backgroundImageUrl,
}: PropsWithChildren<HeroSectionProps>) {
  return (
    <S.HeroContainer backgroundImageUrl={backgroundImageUrl}>
      <S.LeftContent>{children}</S.LeftContent>
      <S.RightContent>
        <S.ImageContainer>
          <Image src={imgSrc} alt={imgAlt} width="800px" height="660px" />
        </S.ImageContainer>
      </S.RightContent>
    </S.HeroContainer>
  );
}
