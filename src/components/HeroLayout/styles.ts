import styled from 'styled-components';

import { HeroContainerProps } from './types';

export const HeroContainer = styled.div<HeroContainerProps>`
  width: 100%;
  height: 100%;
  background-image: url(${p => p.backgroundImageUrl});
  background-size: cover;
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`;

export const LeftContent = styled.div`
  width: 480px;
  height: 207px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: -4rem;
  margin-left: 4rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
