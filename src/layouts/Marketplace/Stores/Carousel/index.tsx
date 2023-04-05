import { FcPrevious, FcNext } from 'react-icons/fc';

import Image from 'next/legacy/image';

import { useRef } from 'react';

import { CarouselProps } from './types';

import * as S from './styles';

export function Carousel({ slides }: CarouselProps) {
  const carouselRef = useRef(null);

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

  return (
    <S.CarouselContainer>
      <S.Slides ref={carouselRef}>
        {slides.map((item: string, index: number) => (
          <S.Slide key={item.concat(String(index))}>
            <Image
              src={item}
              alt={`carousel item number ${index + 1}`}
              width={500}
              height={270}
            />
          </S.Slide>
        ))}
      </S.Slides>
      <S.Button onClick={() => handleScrollToRight()}>
        <FcPrevious size={20} />
      </S.Button>
      <S.Button onClick={() => handleScrollToLeft()}>
        <FcNext size={20} />
      </S.Button>
    </S.CarouselContainer>
  );
}
