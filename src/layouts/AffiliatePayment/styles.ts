import styled from 'styled-components';

import { Button as Btn } from 'components/Button';

export const Container = styled.div`
  display: flex;
  align-items: align-left;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;
  padding: 32px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 33px;
  @media (max-width: 600px) {
    padding: 20px 15px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Button = styled(Btn)`
  max-width: 211px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 36px 0;
  font-size: 12px;
`;

export const Span = styled.span`
  margin-left: 5px;
`;

export const TableContainer = styled.div`
  padding: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  margin-top: 20px;
  overflow: auto;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 1035px;
  border-collapse: collapse;
  background: ${({ theme }) => theme.colors.background};
`;

export const TableRow = styled.tr`
  width: 100%;
`;

export const TableColumn = styled.td`
  max-width: 200px;
  overflow: hidden;
  font-weight: 500;
  text-overflow: ellipsis;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray[700]};
  padding: 10px 10px;
`;

export const TableHeaderItem = styled.th<{ width?: string }>`
  width: ${({ width }) => width || '100%'};
  padding: 10px 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const TableHeaderContainer = styled.thead`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
`;

export const UploadButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 24px;
`;

export const UploadButton = styled(Btn)`
  max-width: 191px;
  width: 100%;
  height: 40px;
  font-size: 12px;
`;

export const TableColumnDate = styled(TableColumn)`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const TableColumnAction = styled(TableColumn)`
  display: flex;
  gap: 10px;
  align-items: center;
  background-image: linear-gradient(45deg, #001f80, #0c61ff);
  font-weight: 600;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(45deg, #0c61ff, #001f80);
  }
`;
