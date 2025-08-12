import Link from 'next/link';

import { CONTACT_US_PAGE, FREQUENT_QUESTIONS_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function Footer() {
  return (
    <S.Container>
      <S.About>
        <div>
          <S.Heading>Institucional</S.Heading>

          <S.Nav>
            <Link href={FREQUENT_QUESTIONS_PAGE}>Perguntas Frequentes</Link>
            <Link href={CONTACT_US_PAGE}>Suporte</Link>
          </S.Nav>
        </div>
      </S.About>

      <S.Contact>
        <S.SocialNetworks>
          <Link href="https://www.instagram.com/clubequantum">
            <S.Instagram />
          </Link>
        </S.SocialNetworks>

        <S.HeadingContact>Nossa central de atendimento</S.HeadingContact>

        <S.HeadingNumber>(11) 96443-8721</S.HeadingNumber>
      </S.Contact>
    </S.Container>
  );
}
