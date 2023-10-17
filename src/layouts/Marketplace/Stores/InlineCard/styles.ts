import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

const entry = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(-3rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const CardContainer = styled(Link)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  animation: ${entry} 0.2s ease;
  cursor: pointer;
  flex: 1;
  max-width: 300px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray[700]};
  padding: 0.2rem;
  border-radius: 25px 0 0 25px;
  &:hover {
    transform: translateY(-0.2rem);
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
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[400]};
  & svg {
    margin-right: 0.5rem;
  }

  margin-right: 1rem;

  @media (max-width: 767px) {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
  }
`;

export const Distance = styled.div`
  margin-right: 1rem;
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
