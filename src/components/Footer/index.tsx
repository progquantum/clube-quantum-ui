import Link from 'next/link';

import { CONTACT_US_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function Footer() {
  return (
    <S.Container>
      <S.About>
        <div>
          <S.Heading>Institucional</S.Heading>

          <S.Nav>
            <Link href="/">Quem somos</Link>

            <Link href="/">Trabalhe conosco</Link>

            <Link href={CONTACT_US_PAGE}>Fale conosco</Link>

            <Link href="/">Parceiros</Link>
          </S.Nav>
        </div>

        <div>
          <S.Heading>Deixe-nos lhe ajudar</S.Heading>

          <S.Nav>
            <Link href="/">Sua conta</Link>

            <Link href="/">Frete e prazo de entrega</Link>

            <Link href="/">Devoluções e reembolsos</Link>

            <Link href="/">Ajuda</Link>
          </S.Nav>
        </div>
      </S.About>

      <S.Contact>
        <S.SocialNetworks>
          <S.Instagram />
          <S.Facebook />
          <S.Twitter />
        </S.SocialNetworks>

        <S.HeadingContact>Nossa central de atendimento</S.HeadingContact>
        <S.HeadingNumber>0800 000 0000</S.HeadingNumber>
      </S.Contact>
    </S.Container>
  );
}
