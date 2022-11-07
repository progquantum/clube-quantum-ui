import styled from 'styled-components';

import { Button } from 'components/Button';

export const DivSelectPlan = styled.div`
  grid-area: DivSelectPlan;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25rem 1.5rem;
  gap: 1.5rem;
  width: 21.875rem;
  height: 11.5625rem;
  border-radius: 0.9375rem;
  box-shadow: 0rem 0rem 1.25rem rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
  margin: 48px 0;
  @media (max-width: 910px) {
    margin: 48px 0 0 0;
  }

  @media (max-width: 460px) {
    width: 330px;
  }
`;

export const HeaderSelectPlan = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  > svg {
    font-size: 1.0625rem;
    color: ${({ theme }) => theme.colors.gray['300']};
  }
`;
export const TitlePlan = styled.span`
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 1.25rem;
`;
export const DivStatusPlan = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const TitleStatusPlan = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.success};
`;
export const StatusPlan = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.success};
`;
export const Deadline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const TextDeadline = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  color: ${({ theme }) => theme.colors.gray[300]};
  line-height: 1.25rem;
  width: 135.75px;
`;
export const ButtonCancel = styled(Button)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.875rem;
  line-height: 1.0625rem;
  height: 37px;
  width: 135.75px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.danger};
  }
`;
