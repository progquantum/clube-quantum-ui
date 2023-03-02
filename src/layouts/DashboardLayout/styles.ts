import styled from 'styled-components';

export const RightWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Container = styled.main`
  margin: 2rem auto 15rem;
  gap: 5rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  display: flex;
  align-items: center;
  position: relative;
  max-width: 70.625rem;
  width: 100%;
  @media (max-width: 1140px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  @media (max-width: 1024px) {
    margin-left: 3rem;
    margin-right: 3rem;
    gap: 1rem;
  }
  @media (max-width: 840px) {
    gap: 0;
    margin-left: 2rem;
  }

  @media (max-width: 750px) {
    margin: 2rem 0 15rem;
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
