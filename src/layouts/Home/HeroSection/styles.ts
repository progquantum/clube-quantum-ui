import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/images/Background_blue_01.svg');
  background-size: cover;
  padding: 5rem 0;

  @media (max-width: 425px) {
    display: none;
  }
`;

export const ImageContainer = styled.div``;
