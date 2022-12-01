import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin: 2rem 0;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
