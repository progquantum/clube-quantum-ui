import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';

import { useRef } from 'react';

import { useWindowSize } from 'react-use';

import { useGetFilterCategories } from 'hooks/establishment/useGetCategories';

import { Category } from 'hooks/establishment/useGetCategories/types';

import { SectionTitle } from '../Components/SectionTitle';
import * as S from './styles';
import { allIcons } from './allIcons';

function getIcon(iconName: string) {
  const Icon = allIcons[iconName];
  if (Icon) {
    return <Icon size={24} />;
  }
  return <allIcons.MdFiberManualRecord size={24} />;
}

export function FilterTags({
  toggleSelectedCategory,
  selectedCategory,
}: {
  toggleSelectedCategory?: (categoryId: string) => void;
  selectedCategory?: string;
}) {
  const { data: categories } = useGetFilterCategories();
  const { width } = useWindowSize();
  const containerRef = useRef(null);

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

  const isMobile = width <= 450;

  return (
    <S.Container>
      <div style={{ marginTop: '3rem' }}>
        <SectionTitle>Filtrar</SectionTitle>
      </div>
      <S.ScrollContainer ref={containerRef}>
        {categories &&
          categories.map((category: Category) => (
            <S.TagButton
              key={category.id}
              isSelected={category.id === selectedCategory}
              onClick={() => toggleSelectedCategory(category.id)}
            >
              {getIcon(category.icon_name)}
              {category.name}
            </S.TagButton>
          ))}
      </S.ScrollContainer>
      {!isMobile && (
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
