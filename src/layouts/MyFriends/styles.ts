import styled from 'styled-components';

import { BarProps } from './types';

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  gap: 1rem;

  @media (max-width: 1024px) {
    justify-content: center;
    gap: 1rem;
    flex-direction: column;
  }
`;

export const CardFriends = styled.div`
  flex: 1;
  box-shadow: 0rem 0rem 2rem rgba(41, 40, 40, 0.1);
  width: 100%;
  border-radius: 0.625rem;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.gray['400']};
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;

  > svg {
    color: ${({ theme }) => theme.colors.gray['200']};
  }
`;

export const Friend = styled.div`
  display: flex;
  justify-content: space-between;

  h5 {
    font-weight: 600;
    font-size: 0.75rem;
    margin-bottom: 0.4rem;
  }

  span {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const Cashback = styled.p`
  font-weight: 600;
  font-size: 0.7rem;
  color: #0a7003;
`;

export const NoCashback = styled.p`
  font-weight: 600;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.gray[300]};
`;

export const TitleFriends = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const AmountFriends = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.mediumslateBlue};
  font-size: 0.8rem;

  p {
    color: ${({ theme }) => theme.colors.mediumslateBlue};
    font-weight: 500;
  }

  &::before {
    display: block;
    content: '';
    width: 2px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.gray[50]};
    margin-right: 10px;
    border-radius: 5px;
  }
`;

export const Image = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const FlexCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const IndirectFriends = styled.div`
  width: 100%;
  box-shadow: 0rem 0rem 2rem rgba(41, 40, 40, 0.1);
  border-radius: 0.625rem;
  padding: 1rem 1.5rem;

  progress {
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    border-radius: 0.5rem;
    height: 0.9375rem;
    margin: 1rem 0;

    &::-webkit-progress-bar,
    &::-webkit-progress-value {
      border-radius: 0.625rem;
    }

    &::-webkit-progress-bar {
      background: ${({ theme }) => theme.colors.lightsteelblueice};
    }

    &::-webkit-progress-value {
      background: ${({ theme }) =>
        theme.gradients.mediumsLateBlueToMidnightBlue};
    }
  }
`;

export const TotalFriends = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.midnightBlue};
  margin: 1rem 0;

  p {
    font-size: 0.8rem;
  }

  span {
    font-weight: 600;
    font-size: 1rem;
  }
`;

export const PaginationContainer = styled.div`
  margin: 1rem 0;
`;

export const GraphicBar = styled.div`
  width: 100%;
  height: 6.6875rem;
  display: flex;
  gap: 0.4375rem;
  justify-content: space-between;
  margin-top: 1rem;

  @media (max-width: 380px) {
    gap: 0;
  }
`;

export const BarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.375rem;
`;

export const Bar = styled.div<BarProps>`
  height: ${({ percentage }) => percentage}%;
  width: 10px;
  border-radius: 50px;
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  position: relative;
  display: inline-block;
  &:hover span {
    visibility: visible;
  }
`;

export const TitleBar = styled.h3`
  font-size: 10px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.midnightBlue};
  transform: rotate(-45deg);
`;
