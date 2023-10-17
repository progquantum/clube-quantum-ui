import Image from 'next/legacy/image';
import Link from 'next/link';
import { IoReturnDownBackSharp } from 'react-icons/io5';

import { HOMEPAGE_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function NotFoundPage() {
  return (
    <S.Container>
      <S.Info>
        <h2>Ops, página não encontrada</h2>
        <Link href={HOMEPAGE_PAGE} legacyBehavior>
          <a className="anchor">
            <IoReturnDownBackSharp size={20} />
            Voltar para homepage
          </a>
        </Link>
      </S.Info>
      <S.ImageWrapper>
        <Image width={420} height={350} src="/images/404.svg" />
      </S.ImageWrapper>
    </S.Container>
  );
}
