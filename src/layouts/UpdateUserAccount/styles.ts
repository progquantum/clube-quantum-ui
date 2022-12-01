import styled from 'styled-components';

export const ColumnGrid = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  margin: 2rem 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const FLex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
