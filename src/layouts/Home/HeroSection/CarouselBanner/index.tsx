import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/legacy/image';
import Link from 'next/link';

import {
  MARKETPLACE_PAGE,
  PLAN_TIM_PAGE,
  POS_PAGE,
} from 'constants/routesPath';
import { useAuthDispatch } from 'contexts/auth/AuthContext';

import * as S from './styles';

export function CarouselBanner() {
  const { setPreviousPage } = useAuthDispatch();
  return (
    <Carousel>
      <Carousel.Item>
        <S.CenterContainer>
          <Link href={POS_PAGE}>
            <Image
              onClick={() => setPreviousPage(POS_PAGE)}
              style={{ cursor: 'pointer' }}
              src="/images/banner_pos.svg"
              alt="Máquina Pos"
              width={1200}
              height={520}
            />
          </Link>
        </S.CenterContainer>
      </Carousel.Item>
      <Carousel.Item>
        <S.CenterContainer>
          <Link href={MARKETPLACE_PAGE}>
            <Image
              onClick={() => setPreviousPage(MARKETPLACE_PAGE)}
              style={{ cursor: 'pointer' }}
              src="/images/banner_marketplace.svg"
              alt="Marketplace"
              width={1200}
              height={520}
            />
          </Link>
        </S.CenterContainer>
      </Carousel.Item>
      <Carousel.Item>
        <S.CenterContainer>
          <Link href={PLAN_TIM_PAGE}>
            <Image
              onClick={() => setPreviousPage(PLAN_TIM_PAGE)}
              style={{ cursor: 'pointer' }}
              src="/images/banner_tim.svg"
              alt="Banner Tim + Banco um"
              width={1200}
              height={520}
            />
          </Link>
        </S.CenterContainer>
      </Carousel.Item>
    </Carousel>
  );
}
