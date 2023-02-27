import styled from 'styled-components';

export const SelectedPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 0 0 1.3rem rgba(0, 0, 0, 0.1);
  border-radius: 0.9rem;

  & div:first-child {
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const PlanPrice = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mediumslateBlue};
`;

export const PlanPriceSubtitle = styled.span`
  font-size: 0.8rem;
`;

export const PhoneNumber = styled.div`
  display: flex;
  justify-content: space-between;

  & span:nth-child(1) {
    color: ${({ theme }) => theme.colors.mediumslateBlue};
    font-weight: 700;
  }
  & span:nth-child(2) {
    text-align: right;
  }
`;
