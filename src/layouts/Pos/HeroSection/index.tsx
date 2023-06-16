import Image from 'next/legacy/image';

import * as S from './styles';

export function HeroSection() {
  return (
    <S.HeroContainer>
      <S.ImageContainer>
        <Image
          src="/images/banner_pos_desktop.svg"
          alt="Máquina Pos"
          layout="fill"
        />
      </S.ImageContainer>
    </S.HeroContainer>
  );
}
