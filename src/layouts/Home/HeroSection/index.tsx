import Image from 'next/image';

import { CarouselBanner } from './CarouselBanner';

import * as S from './styles';

export function HeroSection() {
  return (
    <S.HeroContainer>
      <S.ImageContainer>
        <CarouselBanner />
      </S.ImageContainer>
    </S.HeroContainer>
  );
}
