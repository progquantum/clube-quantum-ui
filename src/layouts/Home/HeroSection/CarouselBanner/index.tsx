import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Link from 'next/link';

import { MARKETPLACE_PAGE, POS_PAGE } from 'constants/routesPath';

export function CarouselBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <div style={{ margin: ' 50px 0px' }}>
          <Link href={POS_PAGE} prefetch>
            <Image
              src="/images/banner_pos.svg"
              alt="Máquina Pos"
              width="1280px"
              height="520px"
            />
          </Link>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ margin: ' 50px 60px' }}>
          <Link href={MARKETPLACE_PAGE} prefetch>
            <Image
              src="/images/banner_marketplace.svg"
              alt="Marketplace"
              width="1200px"
              height="520px"
            />
          </Link>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ margin: ' 50px 60px' }}>
          <Image
            src="/images/banner_tim.svg"
            alt="Banner Tim + Banco um"
            width="1200px"
            height="520px"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
