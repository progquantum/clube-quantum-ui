import Image from 'next/legacy/image';
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
          <Image src={imgSrc} alt={imgAlt} width={600} height={500} />
        </S.ImageContainer>
      </S.RightContent>
    </S.HeroContainer>
  );
}
