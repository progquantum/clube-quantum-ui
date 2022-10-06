import styled from 'styled-components';

export const Container = styled.main`
  max-width: 72.125rem;
  width: 100%;
  margin: 5rem auto;
  gap: 3.125rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 460px) {
    align-items: center;
  }
`;

export const MenuGrid = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 2fr;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
