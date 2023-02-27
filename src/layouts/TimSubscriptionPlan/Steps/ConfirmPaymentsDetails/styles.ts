import styled from 'styled-components';

export const PaymentsDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  gap: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 420px) {
    flex-direction: column;
    width: 100%;
  }
`;
