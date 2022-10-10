import Link from 'next/link';
import Image from 'next/image';

import { FiLogIn } from 'react-icons/fi';

import { SIGN_IN_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function Successful() {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image
          width={365}
          height={415}
          src="/images/successful-signup.svg"
          alt="imagem cadastro com sucesso!"
        />
      </S.ImageContainer>
      <S.Message>
        <Image width={61} height={60} src="/images/check-icon.svg" alt="" />
        <S.TextTitle>
          Tudo certo <br /> seja bem vindo!
        </S.TextTitle>
        <S.Paragraph>
          Seu cadastro foi finalizado com sucesso! Aproveite as ofertas e
          Cashback no Clube Quantum!
        </S.Paragraph>
        <Link href={SIGN_IN_PAGE} prefetch>
          <S.Achor>
            <FiLogIn />
            Retornar para minha conta
          </S.Achor>
        </Link>
      </S.Message>
    </S.Container>
  );
}
