import styled from 'styled-components';

import { Button } from 'components/Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-start;
`;

export const Line = styled.span`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.gray['400']};

  > svg {
    color: ${({ theme }) => theme.colors.gray['300']};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray['400']};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray['700']};
`;

export const Data = styled.p`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.gray['700']};
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.3125rem;

  > div {
    margin: 0;
    display: flex;
    justify-content: flex-end;
  }
`;

export const CVC = styled(DivInput)`
  width: 41.15%;

  @media (max-width: 460px) {
    width: 60%;
  }
`;

export const ReturnButton = styled(Button)`
  margin-top: 0;
  width: 100%;
`;

export const ContentCardNumber = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const ContentCardExpirateCVC = styled(ContentCardNumber)``;
