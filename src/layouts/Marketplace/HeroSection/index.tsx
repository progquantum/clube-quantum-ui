import Image from 'next/image';

import * as S from './styles';

export function HeroSection() {
  return (
    <S.HeroContainer>
      <S.LeftContent>
        <Image
          src="/images/marketplace-hero-title.svg"
          alt="Quantum marketplace logo"
          width="480px"
          height="207px"
        />
        <S.Text>
          Aproveite as melhores ofertas e estabelecimentos da cidade e receba
          dinheiro de volta a cada compra para usar como quiser.
        </S.Text>
      </S.LeftContent>
      <S.RightContent>
        <S.ImageContainer>
          <Image
            src="/images/Casal_Quantum.png"
            alt="Two people smiling while working with a computer"
            width="800px"
            height="660px"
          />
        </S.ImageContainer>
      </S.RightContent>
    </S.HeroContainer>
  );
}
