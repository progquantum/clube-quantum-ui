import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  flex: 1 1 auto;
  justify-content: space-around;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
