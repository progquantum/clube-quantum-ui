import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
import Image from 'next/image';

import { useWindowSize } from 'react-use';

import {
  MARKETPLACE_PAGE,
  PLAN_TIM_PAGE,
  POS_PAGE,
} from 'constants/routesPath';
import { useAuthDispatch } from 'contexts/auth/AuthContext';

import * as S from './styles';

const sizes =
  '(max-width: 1200px) 1000px, (max-width: 1000px) 800px,(max-width: 800px) width: 600px, (max-width: 600px) 100vw, 1200px';

export function CarouselBanner() {
  const { setPreviousPage } = useAuthDispatch();
  const windowSize = useWindowSize();

  const banners = {
    pos:
      windowSize.width < 600
        ? '/images/banner_pos_mobile.svg'
        : '/images/banner_pos_desktop.svg',
    marketplace:
      windowSize.width < 600
        ? '/images/banner_marketplace_mobile.svg'
        : '/images/banner_marketplace_desktop.svg',
    tim:
      windowSize.width < 600
        ? '/images/banner_tim_mobile.svg'
        : '/images/banner_tim_desktop.svg',
  };

  return (
    <Carousel
      indicators={!(windowSize.width < 600)}
      controls={!(windowSize.width < 600)}
    >
      <Carousel.Item>
        <S.CenterContainer>
          <Link href={POS_PAGE}>
            <S.ImageContainer>
              <Image
                onClick={() => setPreviousPage(POS_PAGE)}
                src={banners.pos}
                alt="Máquina Pos"
                style={{ cursor: 'pointer', objectFit: 'fill' }}
                fill
                sizes={sizes}
                priority
              />
            </S.ImageContainer>
          </Link>
        </S.CenterContainer>
      </Carousel.Item>
      <Carousel.Item>
        <S.CenterContainer>
          <Link href={MARKETPLACE_PAGE}>
            <S.ImageContainer>
              <Image
                onClick={() => setPreviousPage(MARKETPLACE_PAGE)}
                style={{ cursor: 'pointer', objectFit: 'fill' }}
                src={banners.marketplace}
                alt="Marketplace"
                fill
                sizes={sizes}
                priority
              />
            </S.ImageContainer>
          </Link>
        </S.CenterContainer>
      </Carousel.Item>
      <Carousel.Item>
        <S.CenterContainer>
          <Link href={PLAN_TIM_PAGE}>
            <S.ImageContainer>
              <Image
                onClick={() => setPreviousPage(PLAN_TIM_PAGE)}
                style={{ cursor: 'pointer', objectFit: 'fill' }}
                src={banners.tim}
                alt="Banner Tim + Banco um"
                fill
                sizes={sizes}
                priority
              />
            </S.ImageContainer>
          </Link>
        </S.CenterContainer>
      </Carousel.Item>
    </Carousel>
  );
}
