import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 19px 24px;
  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  flex: 1;
  min-height: 322px;
  height: 100%;
  width: 100%;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 0;
  text-align: start;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const SubTitle = styled.h3`
  margin-top: 2px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  text-align: start;
  color: ${({ theme }) => theme.colors.gray[300]};
`;
