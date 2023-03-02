import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 19px 24px;
  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  max-width: 505.5px;
  max-height: 322px;
  min-width: 300px;
  height: 100%;
  width: 100%;

  @media (max-width: 1765px) {
    max-width: 423.67px;
  }

  @media (max-width: 1584px) {
    max-width: 871.32px;
  }

  @media (max-width: 1191px) {
    max-width: 423.67px;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const SubTitle = styled.h3`
  margin-top: 2px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[300]};
`;
