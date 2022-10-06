import styled from 'styled-components';

import { Button } from 'components/Button';

export const Container = styled.main`
  max-width: 72.125rem;
  width: 100%;
  margin: 5rem auto;
  gap: 3.125rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 460px) {
    align-items: center;
  }
`;
export const ButtonManagePlans = styled(Button)`
  width: 100%;
  height: 2.3125rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.0625rem;
`;
