import styled, { css } from 'styled-components';

import { Button } from 'components/Button';

import { ButtonProps, StateProps } from './types';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 1440px) {
    max-width: 680px;
  }
  @media (max-width: 1105px) {
    max-width: 600px;
  }

  @media (max-width: 1014px) {
    max-width: 580px;
  }

  @media (max-width: 985px) {
    max-width: 550px;
  }

  @media (max-width: 960px) {
    max-width: 500px;
  }

  @media (max-width: 905px) {
    max-width: 470px;
  }

  @media (max-width: 780px) {
    max-width: 450px;
  }
  @media (max-width: 600px) {
    max-width: 400px;
  }
  @media (max-width: 469px) {
    max-width: 330px;
  }
`;

export const DivColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DivRow = styled.div`
  width: 100%;
  max-width: 497.5px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 469px) {
    font-size: 12px;
  }
`;

export const PjName = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 469px) {
    font-size: 12px;
  }
`;

export const StatePJ = styled.h3<StateProps>`
  ${({ state }) => css`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    color: ${({ theme }) =>
      state ? theme.colors.successLight : theme.colors.danger};

    @media (max-width: 469px) {
      font-size: 10px;
    }
  `}
`;

export const DivBalance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
  gap: 4px;
  width: 115px;
  height: 61px;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

export const BalanceTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 0;
`;

export const BalanceValue = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;

  @media (max-width: 469px) {
    font-size: 10px;
  }
`;

export const DivTop = styled.div`
  display: flex;
  max-width: 497.5px;
  justify-content: space-between;
  align-items: center;
`;

export const DivCnpj = styled.div`
  display: flex;
  width: 100%;
  max-width: 497.5px;
  gap: 12px;
  @media (max-width: 782px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const CNPJData = styled.p`
  margin-top: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const Hifen = styled(CNPJData)`
  @media (max-width: 782px) {
    display: none;
  }
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

export const DivGraphics = styled.div`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  max-width: 1564.5px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 1775px) {
    max-width: 1035px;
  }
`;

export const ContentRow = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1564.5px;
  margin-top: 24px;
  display: flex;
  gap: 24px;
  @media (max-width: 1775px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const ContainerTable = styled.div`
  width: 100%;
  @media (max-width: 1765px) {
    width: 1035px;
  }
`;

export const TopTable = styled.div`
  max-width: 1035px;
  width: 100%;
  padding: 0px 10px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 40px;
  background: ${({ theme }) => theme.colors.ghostwhite};
  border-radius: 10px 10px 0 0;
  @media (max-width: 1765px) {
    width: 1035px;
  }
`;

export const TopParams = styled.h2`
  width: 100%;
  max-width: 74px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const TopParams1 = styled(TopParams)`
  max-width: 320px;
`;

export const TopParams2 = styled(TopParams)`
  max-width: 161px;
`;
export const TopParams3 = styled(TopParams)`
  max-width: 120px;
`;

export const TopParams4 = styled(TopParams)`
  max-width: 92px;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px;
  gap: 48px;
  max-width: 1035px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.07);
  border-radius: 0px 0px 10px 10px;
  @media (max-width: 1765px) {
    width: 1035px;
  }
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Date = styled.p`
  width: 100%;
  max-width: 74px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const ID = styled.p`
  width: 100%;
  max-width: 320px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 161px;
  width: 100%;
`;

export const StatusTrans = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.successLight};
  margin-bottom: 0;
`;

export const Font14 = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const FontGray400 = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const TableColumn2 = styled(TableColumn)`
  max-width: 120px;
`;

export const TableColumn3 = styled(TableColumn)`
  max-width: 92px;
`;
export const ContainerFlag = styled.div`
  width: 100%;
  height: 100%;
  max-width: 505px;
  max-height: 352px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1775px) {
    max-width: 1035px;
  }
`;
export const TopTableSealsByFlag = styled.div`
  max-width: 505px;
  padding: 0px 10px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.ghostwhite};
  border-radius: 10px 10px 0 0;
  @media (max-width: 1775px) {
    max-width: 1035px;
  }
`;

export const TitleSealsByFlag = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.gray[300]};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const SubTitleSealsByFlag = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.mediumslateBlue};
`;

export const ValueFlag = styled.p`
  width: 100%;
  max-width: 90px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 0;
`;

export const TableFlag = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 19px;
  gap: 32px;
  max-width: 505px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.07);
  border-radius: 0px 0px 10px 10px;
  @media (max-width: 1775px) {
    max-width: 1035px;
  }
`;

export const ContentCards = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TableFlagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const TableColumn4 = styled.div`
  display: flex;
  flex-direction: column;
`;
