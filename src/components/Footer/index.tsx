import Link from 'next/link'

import * as S from './styles'

export function Footer () {
  return (
    <S.Container>
      <S.About>
        <S.Wrap>
          <h3>Institucional</h3>

          <S.Nav>
            <Link href=''>
              Quem somos
            </Link>

            <Link href=''>
              Trabalhe conosco
            </Link>

            <Link href=''>
              Fale conosco
            </Link>

            <Link href=''>
              Parceiros
            </Link>
          </S.Nav>
        </S.Wrap>

        <S.Wrap>
          <h3>Deixe-nos lhe ajudar</h3>

          <S.Nav>
            <Link href=''>
              Sua conta
            </Link>

            <Link href=''>
              Frete e prazo de entrega
            </Link>

            <Link href=''>
              Devoluções e reembolsos
            </Link>

            <Link href=''>
              Ajuda
            </Link>
          </S.Nav>
        </S.Wrap>
      </S.About>

      <S.Contact>
        <S.SocialNetworks>
          <S.Instagram />
          <S.Facebook />
          <S.Twitter />
        </S.SocialNetworks>

        <h4>Nossa central de atendimento</h4>
        <h2>0800 000 0000</h2>
      </S.Contact>
    </S.Container>
  )
}
