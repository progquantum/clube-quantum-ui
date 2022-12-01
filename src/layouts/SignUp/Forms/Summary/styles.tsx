import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.input.background['1']};
  border-radius: 0.5rem;
`;

export const TitleFinished = styled.h2`
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.mediumslateBlue};
`;

export const Plan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Title = styled.p`
  display: flex;
  gap: 0.625rem;
  font-weight: 700;
  margin-top: 1rem;

  > svg {
    color: ${({ theme }) => theme.colors.mediumslateBlue};
  }
`;

export const TitlePlan = styled.h3`
  font-weight: 800;
  font-size: 1.25rem;
  margin-top: 0.9375rem;
  text-align: start;
`;

export const CardDataTitle = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
  @media (max-width: 460px) {
    font-size: 0.875rem;
  }
`;

export const CardDataText = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.375rem;
  @media (max-width: 460px) {
    font-size: 0.875rem;
  }
`;

export const Bank = styled(Plan)`
  gap: 1rem;
`;

export const CreditCard = styled(Plan)`
  gap: 1rem;
`;

export const Back = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.midnightBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
`;
