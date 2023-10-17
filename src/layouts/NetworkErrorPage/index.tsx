import Image from 'next/image';

import Link from 'next/link';

import { Button } from 'components/Button';

import { DASHBOARD_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function NetworkErrorPage() {
  return (
    <S.Container>
      <S.Title>500</S.Title>
      <S.Subtitle>Oops, algo deu errado!</S.Subtitle>
      <S.Text>
        Estamos trabalhando para corrigir o problema o mais rápido possível, por
        favor, tente novamente mais tarde.
      </S.Text>
      <Link href={DASHBOARD_PAGE}>
        <Button style={{ gridArea: 'Button' }}>Retornar à homepage</Button>
      </Link>
      <S.ImageWrapper>
        <Image
          src="/images/500.svg"
          fill
          priority
          alt="Imagem indicando um erro que acabou de acontecer na página"
        />
      </S.ImageWrapper>
    </S.Container>
  );
}
