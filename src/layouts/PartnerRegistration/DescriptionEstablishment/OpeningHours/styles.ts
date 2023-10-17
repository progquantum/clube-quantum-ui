import styled from 'styled-components';

import { Button } from 'components/Button';

export const ContainerOpeningHours = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 10px;
  @media (max-width: 1129px) {
    flex-direction: column;
  }
`;

export const ContainerDays = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 421.71px;
  width: 100%;
  @media (max-width: 1129px) {
    max-width: 747px;
  }
`;

export const ContentDays = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

export const ContentRow = styled(ContentDays)`
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

export const ContainerInput = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
`;
