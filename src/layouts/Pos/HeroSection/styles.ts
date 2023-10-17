import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/images/pos_background_blue.png');
  background-position: bottom;
  background-size: cover;
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;

  @media (max-width: 414px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 45vh;
`;
