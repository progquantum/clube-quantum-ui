import styled from 'styled-components';

import { Button } from 'components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1.25rem 1.5rem;
  gap: 1.5rem;
  margin: 2rem 0;

  box-shadow: 0rem 0rem 1.25rem rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  width: 44.9375rem;

  @media (max-width: 1024px) {
    width: 27.0625rem;
  }

  @media (max-width: 460px) {
    width: 330px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  > svg {
    font-size: 1.0625rem;
    color: ${({ theme }) => theme.colors.gray['300']};
  }
`;

export const TitleContent = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 20px;
`;

export const Title = styled.h3`
  font-weight: 900;
  font-size: 18px;
  line-height: 1.375rem;
`;

export const Text = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const ButtonManagePlans = styled(Button)`
  width: 100%;
  height: 2.3125rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.0625rem;
`;
