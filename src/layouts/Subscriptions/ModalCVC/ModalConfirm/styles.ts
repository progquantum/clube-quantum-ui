import styled from 'styled-components';

import { Button } from 'components/Button';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 31.7437rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  background: ${({ theme }) => theme.colors.white};
`;
export const Plan = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
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
  font-weight: 900;
  font-size: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const CardDataTitle = styled.p`
  font-weight: 700;
  font-size: 1.125rem;

  @media (max-width: 500px) {
    font-size: 0.875rem;
  }
`;
export const CardDataText = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.375rem;

  @media (max-width: 500px) {
    font-size: 0.875rem;
  }
`;
export const ButtonConfirm = styled(Button)`
  width: 100%;
  height: 2.75rem;
  margin-top: 0;
`;
