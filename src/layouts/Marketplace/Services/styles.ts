import styled from 'styled-components';

export const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 3rem 0;

  @media (max-width: 447px) {
    justify-content: center;
    align-items: center;
  }
`;
