import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.95rem 1rem;
  border-radius: 100%;
  box-shadow: 0px 5px 20px rgba(69, 100, 0, 0.15);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  & > svg {
    color: blue;
  }
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 4rem auto 0;
  position: relative;
  display: flex;
  align-items: center;

  & > ${Button}:first-of-type {
    left: 0;
  }
  & > ${Button}:last-of-type {
    right: 0;
  }
`;

export const Slides = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  transition: all 0.4s ease-in-out;
  @media (max-width: 700px) {
    height: 240px;
  }

  @media (max-width: 450px) {
    height: 163px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const Slide = styled.div`
  display: inline-block;
  margin: 0 1rem;
  width: 500px;
  height: 100%;
  max-height: 321px;
  min-height: 163px;
  position: relative;
  &:hover {
    transform: scale(1.02);
  }
  transition: all 0.2s ease;

  @media (max-width: 700px) {
    width: 95%;
    height: 240px;
  }

  @media (max-width: 600px) {
    & img {
      object-fit: contain;
    }
  }

  @media (max-width: 450px) {
    height: 163px;
    margin-left: 0.5rem;
  }

  & img {
    object-fit: cover;

    border-radius: 0.31rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
