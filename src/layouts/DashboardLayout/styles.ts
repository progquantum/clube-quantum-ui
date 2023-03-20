import styled from 'styled-components';

import { ContainerProps } from './types';

export const RightWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  flex: 1;
`;

export const Container = styled.main<ContainerProps>`
  margin: 2rem auto 3rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  display: flex;
  position: relative;
  gap: 5rem;
  max-width: ${({ maxWidth }) => maxWidth || '70rem'};
  width: 100%;
  @media (max-width: 850px) {
    gap: 2rem;
  }
  @media (max-width: 360px) {
    padding: 0;
  }
`;

export const SideBarMobileTrigger = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[700]};
  padding: 1rem 0;
  display: flex;
  justify-content: flex-end;
  & svg {
    margin-right: 5%;
    color: ${({ theme }) => theme.colors.white};
  }
  @media (min-width: 780px) {
    display: none;
  }
`;
