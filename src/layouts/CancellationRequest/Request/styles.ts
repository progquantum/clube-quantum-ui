import styled from 'styled-components';

import { RequestStatusProps, RequestStatusStyleEnum } from './types';

export const Container = styled.div`
  margin: 1rem 8rem;
  box-shadow: 0px 0px 0.4rem rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  padding: 1.7rem;
`;

export const UserName = styled.h3`
  background-image: ${({ theme }) =>
    theme.gradients.mediumsLateBlueToMidnightBlue};
  background-clip: text
  text-fill-color: transparent
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
`;

export const GrayLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 0.9rem;
  display: block;
  margin: 0.135rem 0;
`;

export const ContractId = styled(GrayLabel)``;

export const RequestDateLabel = styled(GrayLabel)``;

export const RequestDate = styled.span`
  display: block;
  margin: 0.7rem 0;
`;

export const DataRow = styled.span`
  display: block;
  margin: 0.7rem 0;
`;

export const ContractName = styled(DataRow)``;

export const BirthDate = styled(DataRow)``;

export const Email = styled(DataRow)``;

export const RequestStatus = styled.span<RequestStatusProps>`
  color: ${({ theme, status }) => theme.colors[RequestStatusStyleEnum[status]]};
`;

export const Bold = styled.span`
  font-weight: 700;
`;
