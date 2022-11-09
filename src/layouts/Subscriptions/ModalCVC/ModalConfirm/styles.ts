import styled from 'styled-components';

export const Plan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  margin: 1rem 0;
`;

export const CardDataContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Title = styled.p`
  display: flex;
  gap: 0.625rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

export const TitlePlan = styled.h2`
  font-weight: 900;
  font-size: 1.25rem;
  padding-bottom: 1rem;
`;

export const CardDataTitle = styled.p`
  font-weight: 700;
  font-size: 1.125rem;

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const CardDataText = styled.p`
  font-size: 1.125rem;

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;
