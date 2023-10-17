/* eslint-disable react/jsx-no-useless-fragment */
import { FcPrevious, FcNext } from 'react-icons/fc';

import Image from 'next/image';

import { useRef } from 'react';

import { useWindowSize } from 'react-use';

import { CarouselProps } from './types';

import * as S from './styles';

export function Carousel({ slides }: CarouselProps) {
  const carouselRef = useRef(null);
  const { width } = useWindowSize();
  function handleScrollToRight() {
    const { scrollWidth } = carouselRef.current;
    carouselRef.current.scroll({
      left: Math.min(carouselRef.current.scrollLeft - 300, scrollWidth),
      behavior: 'smooth',
    });
  }

  function handleScrollToLeft() {
    const { scrollWidth } = carouselRef.current;
    carouselRef.current.scroll({
      left: Math.min(carouselRef.current.scrollLeft + 300, scrollWidth),
      behavior: 'smooth',
    });
  }

  const isMobile = width <= 450;

  return (
    <S.CarouselContainer>
      <S.Slides ref={carouselRef}>
        {slides?.length === 0 ? (
          <>
            <S.Slide>
              <Image
                src="/images/banner_cashback_marketplace.svg"
                alt="banner cashback quantum"
                fill
                priority
                sizes="(max-width: 700px) 70vw, 30vw"
              />
            </S.Slide>
            <S.Slide>
              <Image
                src="/images/banner_cashback_marketplace.svg"
                alt="banner cashback quantum"
                fill
                priority
              />
            </S.Slide>
          </>
        ) : (
          <>
            {slides?.map(item => (
              <S.Slide key={item.id}>
                <Image
                  src={item.url}
                  alt={`carousel item number ${item.id + 1}`}
                  fill
                  priority
                  sizes="(max-width: 700px) 70vw, 30vw"
                />
              </S.Slide>
            ))}
          </>
        )}
      </S.Slides>
      {!isMobile && (
        <>
          <S.Button onClick={() => handleScrollToRight()}>
            <FcPrevious size={20} />
          </S.Button>
          <S.Button onClick={() => handleScrollToLeft()}>
            <FcNext size={20} />
          </S.Button>
        </>
      )}
    </S.CarouselContainer>
  );
}
