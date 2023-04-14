import { BiRestaurant } from 'react-icons/bi';

import { FaGasPump } from 'react-icons/fa';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';

import { useLayoutEffect, useRef, useState } from 'react';

import { useGetFilterCategories } from 'hooks/pos/useGetCategories';
import { Category } from 'hooks/pos/useGetCategories/types';

import { SectionTitle } from '../Components/SectionTitle';
import * as S from './styles';

export function FilterTags() {
  const { data: categories } = useGetFilterCategories();

  const containerRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const currentCategory = 'Restaurante';

  const categoriesIcons = {
    Restaurante: <BiRestaurant size={24} />,
    'Posto de Gasolina': <FaGasPump size={24} />,
  };

  useLayoutEffect(() => {
    if (containerRef.current.clientWidth < containerRef.current.scrollWidth) {
      setIsOverflowing(true);
    } else {
      setIsOverflowing(false);
    }
  }, [containerRef.current]);

  function handleScrollToRight() {
    const { scrollWidth } = containerRef.current;
    containerRef.current.scroll({
      left: Math.min(containerRef.current.scrollLeft - 300, scrollWidth),
      behavior: 'smooth',
    });
  }

  function handleScrollToLeft() {
    const { scrollWidth } = containerRef.current;
    containerRef.current.scroll({
      left: Math.min(containerRef.current.scrollLeft + 300, scrollWidth),
      behavior: 'smooth',
    });
  }

  return (
    <S.Container>
      <SectionTitle>Filtrar</SectionTitle>
      <S.ScrollContainer ref={containerRef}>
        {categories &&
          categories.map((category: Category) => (
            <S.TagButton
              key={category.id}
              isSelected={currentCategory === category.name}
            >
              {categoriesIcons[category.name]}
              {category.name}
            </S.TagButton>
          ))}
      </S.ScrollContainer>
      {isOverflowing && (
        <>
          <S.RightButton onClick={() => handleScrollToRight()}>
            <MdOutlineNavigateBefore size={20} />
          </S.RightButton>
          <S.LeftButton onClick={() => handleScrollToLeft()}>
            <MdOutlineNavigateNext size={20} />
          </S.LeftButton>
        </>
      )}
    </S.Container>
  );
}
