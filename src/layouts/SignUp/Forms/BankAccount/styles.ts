import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 22.25rem;
  gap: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.9375rem;
`;
export const BankDataTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

export const BankData = styled.h3`
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
`;

export const BankInfo = styled.p`
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray[700]};
`;
