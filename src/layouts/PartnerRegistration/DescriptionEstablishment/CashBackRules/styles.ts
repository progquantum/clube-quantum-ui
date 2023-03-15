import styled from 'styled-components';

import { Button } from 'components/Button';

export const ContainerCashBack = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 10px;
`;

export const ButtonDays = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  @media (max-width: 1129px) {
    flex-direction: column;
  }
`;
export const LineButton = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;

  @media (max-width: 470px) {
    flex-direction: column;
  }
`;

export const RowButton = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

export const RowCashBackInf = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  margin-top: 4px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const LineCashBack = styled(LineButton)`
  width: 205%;
  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 470px) {
    flex-direction: column;
  }
`;

export const StyledButton = styled(Button)`
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.gray[400]};
    border: 2px solid ${({ theme }) => theme.colors.gray[200]};
    &:hover {
      background: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.lightsteelblue};
  }
`;
