import Image from 'next/image';

import * as S from './styles';

export function Fallback() {
  return (
    <S.FallbackContainer>
      <S.Text>
        Permita o acesso à sua localização para ter acesso ao mapa
      </S.Text>
      <Image
        src="/images/map.png"
        alt="Um mapa da região próxima"
        width="1200px"
        height="505px"
      />
    </S.FallbackContainer>
  );
}
