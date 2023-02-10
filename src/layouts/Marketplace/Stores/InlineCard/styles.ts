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
`;

export const Title = styled.h4`
  width: 100%;
`;

export const Rate = styled.div`
  color: ${({ theme }) => theme.colors.gray[400]};
  & svg {
    margin-right: 0.5rem;
  }

  margin-right: 0.5rem;
`;

export const Distance = styled.div`
  margin-right: 0.5rem;
  font-weight: 500;
`;

export const Discount = styled.div`
  padding: 0.5rem;
  height: max-content;
  border-radius: 0.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ghostwhite};
  background: ${({ theme }) => theme.gradients.mediumsLateBlueToMidnightBlue};
`;

export const Commerce = styled.div`
  width: 100%;
`;
