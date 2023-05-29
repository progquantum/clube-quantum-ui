import styled from 'styled-components';

import { CancellationStatusProps } from './types';

export const Container = styled.button`
  background: transparent;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  text-align: left;
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Text = styled.p`
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const DueDate = styled.p`
  text-align: left;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.mediumslateBlue};
`;

export const CancellationStatus = styled.div<CancellationStatusProps>`
  width: 90%;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: ${({ status, theme }) =>
    status === 'canceled' ? theme.colors.danger : theme.colors.gray[400]};
  color: ${({ theme }) => theme.colors.white};
  text-align: left;

  @media (max-width: 580px) {
    font-size: 80%;
  }
  @media (max-width: 450px) {
    font-size: 60%;
  }
`;
