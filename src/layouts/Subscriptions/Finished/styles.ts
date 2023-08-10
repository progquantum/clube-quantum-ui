import styled from 'styled-components';

import { Button } from 'components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  overflow-y: auto;
  max-height: 100vh;
  margin: 0rem 0;
`;

export const Plan = styled.div`
  display: flex;
  flex-direction: column;
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
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  > svg {
    color: ${({ theme }) => theme.colors.mediumslateBlue};
  }
`;

export const TitlePlan = styled.h2`
  font-weight: 700;
  font-size: 1.25rem;
`;

export const CardDataTitle = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
`;
export const CardDataText = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

export const Bank = styled(Plan)`
  gap: 0.3rem;
`;

export const CreditCard = styled(Plan)`
  gap: 0.3rem;
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
  min-height: 60px;
`;

export const ReturnButton = styled(Button)`
  margin-top: 0;
  width: 100%;
  min-height: 60px;
`;
