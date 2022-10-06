import styled from 'styled-components';

import { Button } from 'components/Button';

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 120px auto;
  width: 100%;
  gap: 120px;

  @media (max-width: 1024px) {
    gap: 60px;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 27.0625rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  background: ${({ theme }) => theme.colors.white};
  @media (max-width: 460px) {
    width: 20.625rem;
  }
`;
export const TitleFinished = styled.h2`
  font-weight: 900;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.mediumslateBlue};
  margin-bottom: 48px;
`;
export const Plan = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  padding: 20px 24px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.9375rem;
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
  font-size: 1rem;
  line-height: 1.25rem;
`;
export const TitlePlan = styled.h2`
  width: 100%;
  font-weight: 900;
  font-size: 1.25rem;
  margin-top: 0.9375rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
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
  gap: 1.5rem;
`;
export const CreditCard = styled(Plan)`
  gap: 1rem;
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
  padding: 10px 29px;
  margin-top: 32px;
  margin-bottom: 7px;
`;
export const ReturnButton = styled(Button)`
  width: 100%;
`;
