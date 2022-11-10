import Image from 'next/image';
import Link from 'next/link';
import { IoReturnDownBackSharp } from 'react-icons/io5';

import { HOMEPAGE_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function NotFoundPage() {
  return (
    <S.Container>
      <S.Info>
        <p>Oops, página não encontrada</p>
        {/* Should wrap link component with element due to this 
        issue of next/link https://github.com/vercel/next.js/issues/127 */}
        <Link href={HOMEPAGE_PAGE} prefetch>
          <a className="anchor">
            <IoReturnDownBackSharp size={20} />
            Voltar para homepage
          </a>
        </Link>
      </S.Info>
      <S.ImageWrapper>
        <Image width={385} height={286} src="/images/404-not-found.svg" />
      </S.ImageWrapper>
    </S.Container>
  );
}
