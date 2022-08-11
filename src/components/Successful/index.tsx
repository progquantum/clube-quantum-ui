import Link from 'next/link'
import Image from 'next/image'

import * as S from './styles'

export function Successful () {
  return (
    <S.Container>
      <Image width={61} height={60} src='/images/check-icon.png' alt='' />
      <S.TextTitle
        fontWeight={900}
        margin='1.875rem 0 3rem'
      >
        Tudo certo!
      </S.TextTitle>
      <S.Paragraph>
        Seu cadastro foi finalizado com sucesso!
        Aproveite as ofertas e Cashback no Clube Quantum!
      </S.Paragraph>
      <S.TextTitle
        fontWeight={700}
      >
        Seja bem vindo!
      </S.TextTitle>
      <Link href='/signin'>
        <S.Button>Retornar para minha conta</S.Button>
      </Link>
    </S.Container>
  )
}
