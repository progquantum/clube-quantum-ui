import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  @media (max-width: 767px) {
    max-width: 300px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 64.5%;
`;

export const Title = styled.h4`
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
`;

export const Rate = styled.div`
  color: ${({ theme }) => theme.colors.gray[400]};
  & svg {
    margin-right: 0.5rem;
  }

  margin-right: 0.5rem;

  @media (max-width: 767px) {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
  }
`;

export const Distance = styled.div`
  margin-right: 0.5rem;
  font-weight: 500;

  @media (max-width: 767px) {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
  }
`;

export const Discount = styled.div`
  padding: 0.5rem;
  height: max-content;
  border-radius: 0.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ghostwhite};
  background: ${({ theme }) => theme.gradients.mediumsLateBlueToMidnightBlue};

  @media (max-width: 767px) {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const Commerce = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
`;
