import styled, { css } from 'styled-components';

import { Button } from 'components/Button';

import { ButtonProps } from './types';

export const Container = styled.div<{ isSideBarExpanded: boolean }>`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-template-areas:
    'Head Head Head'
    'Balance Balance Balance'
    'Line Line Pie'
    'StyledPie Bar Bar2';
  margin-top: 2.25rem;
  gap: 1.5rem;

  ${({ isSideBarExpanded }) =>
    isSideBarExpanded &&
    css`
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'Head Head'
        'Balance Balance'
        'Line Line'
        'Pie StyledPie'
        'Bar Bar2';
    `}

  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'Head Head'
      'Balance Balance'
      'Line Line'
      'Pie StyledPie'
      'Bar Bar2';
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'Head Head'
      'Balance Balance'
      'Line Line'
      'Pie Pie'
      'StyledPie StyledPie'
      'Bar Bar'
      'Bar2 Bar2';
  }
`;

export const Head = styled.div`
  grid-area: Head;
`;
export const Balance = styled.div<{ isSideBarExpanded: boolean }>`
  width: 100%;
  grid-area: Balance;
  gap: 1.5rem;
  display: flex;
  ${({ isSideBarExpanded }) =>
    isSideBarExpanded &&
    css`
      @media (max-width: 1500px) {
        flex-direction: column;
      }
    `}
  @media (max-width: 1070px) {
    flex-direction: column;
  }
`;

export const RowContent = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const ContentBalance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 24px;
  gap: 12px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 100%;
  max-height: 98.87px;
  width: 100%;
`;

export const TitleBalance = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const ValueBalance = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const DivRow = styled.div`
  width: 100%;
  max-width: 497.5px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ButtonUnderline = styled(Button)<ButtonProps>`
  ${({ underline }) => css`
    margin-top: 0;
    max-width: 137px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration-line: ${underline ? 'underline' : 'none'};
    background: transparent;
    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.colors.midnightBlue};
      opacity: 0.7;
    }

    color: ${({ theme }) => theme.colors.midnightBlue};
  `}
`;

export const TitleAdm = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
`;
