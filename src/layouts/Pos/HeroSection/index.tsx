import Image from 'next/image';

import * as S from './styles';

export function HeroSection() {
  return (
    <S.HeroContainer>
      <S.ImageContainer>
        <Image
          src="/images/banner_pos.svg"
          alt="Máquina Pos"
          width="1280px"
          height="720.31px"
        />
      </S.ImageContainer>
    </S.HeroContainer>
  );
}
