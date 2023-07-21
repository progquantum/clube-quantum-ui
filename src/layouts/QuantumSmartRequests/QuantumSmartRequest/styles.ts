import styled from 'styled-components';

import { StatusColorEnum } from './types';

export const Container = styled.div`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.1s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.ghostwhite};
  }
`;

export const Name = styled.h5`
  background: ${({ theme }) => theme.gradients.mediumsLateBlueToMidnightBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Id = styled.span`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const RequestDate = styled.div`
  & span:first-of-type {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
  & span:last-of-type {
    font-weight: 700;
  }
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Field = styled.div`
  & span:first-of-type {
    font-weight: 700;
  }
`;

export const RequestStatus = styled.div<{ requestStatus: string }>`
  width: 100%;
  padding: 0.6rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  text-align: center;
  border-radius: 0.2rem;
  background-color: ${({ requestStatus, theme }) =>
    theme.colors[StatusColorEnum[requestStatus]]};
`;
