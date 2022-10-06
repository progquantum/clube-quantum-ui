import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 5rem auto;
  width: 100%;
  gap: 1.87rem;

  @media (max-width: 1320px) {
    gap: 6.1563rem;
    max-width: 70rem;
    padding: 0 1rem;
  }
  @media (max-width: 820px) {
    justify-content: center;
  }
`;
