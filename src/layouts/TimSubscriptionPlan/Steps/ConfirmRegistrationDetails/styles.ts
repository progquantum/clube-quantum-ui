import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  margin: 2rem 0;
  flex-wrap: wrap;
  justify-content: center;
  & > div:nth-child(1) {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
  @media (max-width: 990px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;
