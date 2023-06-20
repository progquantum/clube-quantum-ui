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
  margin: 4rem auto;
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
  height: 90%;
  white-space: nowrap;
  transition: all 0.4s ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const Slide = styled.div`
  display: inline-block;
  margin: 0 1rem;
  transition: transform 0.1s ease;
  width: 500px;
  height: 270px;
  position: relative;

  @media (max-width: 700px) {
    width: 95%;
  }

  &:hover {
    transform: scale(1.01);
  }

  & img {
    object-fit: fill;
    border-radius: 1.8rem;
  }
`;
