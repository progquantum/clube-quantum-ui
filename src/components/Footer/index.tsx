import NextLink from 'next/link'

import * as S from './styles'

export const Footer = () => {
  return (
    <S.Container>
      <S.About>
        <div>
          <h3>Institucional</h3>
          <ul>
            <li>
              <NextLink href=''>
                Quem somos
              </NextLink>
            </li>
            <li>
              <NextLink href=''>
                Trabalhe conosco
              </NextLink>
            </li>
            <li>
              <NextLink href=''>
                Fale conosco
              </NextLink>
            </li>
            <li>
              <NextLink href=''>
                Parceiros
              </NextLink>
            </li>
          </ul>
        </div>
        <div>
          <h3>Deixe-nos lhe ajudar</h3>
          <ul>
            <li>
              <NextLink href=''>
                Sua conta
              </NextLink>
            </li>
            <li>
              <NextLink href=''>
                Frete e prazo de entrega
              </NextLink>
            </li>
            <li>
              <NextLink href=''>
                Devoluções e reembolsos
              </NextLink>
            </li>
            <li>
              <NextLink href=''>
                Ajuda
              </NextLink>
            </li>
          </ul>
        </div>
      </S.About>

      <S.Contact>
        <S.SocialNetworks>
          <NextLink href=''>
            <img src='/images/instagram-icon.png' alt='Instagram icon' />
          </NextLink>
          <NextLink href=''>
            <img src='/images/facebook-icon.png' alt='Facebook icon' />
          </NextLink>
          <NextLink href=''>
            <img src='/images/twitter-icon.png' alt='Twitter icon' />
          </NextLink>
        </S.SocialNetworks>

        <h4>Nossa central de atendimento</h4>
        <h2>0800 000 0000</h2>
      </S.Contact>
    </S.Container>
  )
}
