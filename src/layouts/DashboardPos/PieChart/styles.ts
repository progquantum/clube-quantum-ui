import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 19px 24px;
  align-items: flex-start;
  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  max-width: 505.5px;
  max-height: 322px;
  min-width: 300px;
  min-height: 322px;
  height: 100vh;
  width: 100%;

  @media (max-width: 1765px) {
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

  @media (max-width: 469px) {
    font-size: 16px;
  }
`;
