import styled from 'styled-components';

import { HeroContainerProps } from './types';

export const HeroContainer = styled.div<HeroContainerProps>`
  width: 100%;
  height: 100%;
  background-image: url(${p => p.backgroundImageUrl});
  background-size: cover;
  background-position: center;
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export const LeftContent = styled.div`
  width: 480px;
  height: 207px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 4rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    text-align: left;
  }
  @media (max-width: 1100px) {
    & > p {
      font-size: 90%;
    }
  }
  @media (max-width: 900px) {
    & > p {
      font-size: 80%;
    }
  }
  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 0;
    width: 300px;
  }
`;

export const RightContent = styled.div`
  margin-right: 4rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Text = styled.p``;

export const ImageContainer = styled.div``;
