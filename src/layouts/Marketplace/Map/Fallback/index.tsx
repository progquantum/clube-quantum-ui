import Image from 'next/legacy/image';

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
        width={1200}
        height={505}
      />
    </S.FallbackContainer>
  );
}
