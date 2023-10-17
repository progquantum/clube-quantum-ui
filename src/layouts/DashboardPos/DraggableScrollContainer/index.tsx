/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-no-bind */
import { useRef, useState } from 'react';
import styled from 'styled-components';

interface ScrollContainerProps {
  children: React.ReactNode;
}

const ScrollContainer = styled.div`
  width: 100%;

  @media (max-width: 1584px) {
    overflow-x: hidden;
    cursor: grab;
    transition: transform 0.3s ease-out; /* Adiciona uma transição suave */
    &:active {
      cursor: grabbing;
    }
  }
`;

export default function DraggableScrollContainer({
  children,
}: ScrollContainerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current!.offsetLeft);
    setScrollLeft(scrollContainerRef.current!.scrollLeft);
    scrollContainerRef.current!.style.cursor = 'grabbing';
  }

  function handleMouseUp() {
    setIsDragging(false);
    scrollContainerRef.current!.style.cursor = 'grab';
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDragging) return;
    const x = e.pageX - scrollContainerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
  }

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current!.offsetLeft);
    setScrollLeft(scrollContainerRef.current!.scrollLeft);
  }

  function handleTouchEnd() {
    setIsDragging(false);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
  }

  return (
    <ScrollContainer
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      {children}
    </ScrollContainer>
  );
}
