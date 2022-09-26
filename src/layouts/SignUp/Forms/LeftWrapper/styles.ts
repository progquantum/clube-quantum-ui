import styled from 'styled-components';

import { Button } from 'components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 31px;
`;
export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 80px;
`;

export const SubTitle = styled.h2`
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const SubText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 16px;
`;

export const ButtonKnowMore = styled(Button)`
  background: ${({ theme }) => theme.colors.mediumaquamarine};
`;
