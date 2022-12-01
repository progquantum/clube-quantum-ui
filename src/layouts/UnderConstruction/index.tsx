import Image from 'next/image';
import Link from 'next/link';

import { IoReturnDownBackSharp } from 'react-icons/io5';

import { HOMEPAGE_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function UnderConstructionPage() {
  return (
    <S.Container>
      <S.ImageWrapper>
        <Image src="/images/construction.svg" width={420} height={350} />
      </S.ImageWrapper>
      <S.Title>
        <h2>Ops! Página em construção</h2>
        <p>Esta página está em fase de desenvolvimento.</p>
        <Link href={HOMEPAGE_PAGE} prefetch>
          <a>
            <IoReturnDownBackSharp size={20} />
            Voltar para homepage
          </a>
        </Link>
      </S.Title>
    </S.Container>
  );
}
