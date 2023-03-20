import styled, { css } from 'styled-components';

export const PlanHeaderBox = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem auto;
  align-items: center;
  justify-content: space-between;
  & h2 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    background-image: ${({ theme }) =>
      theme.gradients.midnightBlueToMediumsLateBlue};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 580px) {
      font-size: 1.2rem;
    }

    @media (max-width: 530px) {
      font-size: 1rem;
    }
  }

  & span {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const PlanHeaderOutline = styled.div`
  font-size: 0.9rem;
  padding: 0.8rem;
  font-weight: 600;
  border-radius: 0.5rem;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.mediumslateBlue};
  background-image: ${({ theme }) =>
    theme.gradients.midnightBlueToMediumsLateBlue};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PlanCheckMark = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.gradients.lightgreenToGreen};
  font-weight: 600;
  border-radius: 0.5rem;
  display: flex;
  gap: 1rem;
  padding: 0.6rem 0.8rem;
  & span {
    width: max-content;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const AdvantageBox = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0;
  & div:first-child {
    flex-grow: 1;
    background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  & div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const UpgradePlanButton = styled.button`
  width: 100%;
  padding: 0.7rem 0;
  font-weight: 600;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.midnightBlue};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.midnightBlue};
  transition: background-color 0.1s ease;
  transition: color 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.midnightBlue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const PlanContainer = styled.div<{ isActive: boolean }>`
  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.1);
  border-radius: 0.9rem;
  padding: 1.2rem;
  width: 100%;
  height: max-content;
  ${({ isActive }) =>
    !isActive &&
    css`
      & ${PlanHeaderOutline} {
        border: 2px solid ${({ theme }) => theme.colors.danger};
        color: ${({ theme }) => theme.colors.danger};
        background-image: initial;
        -webkit-background-clip: initial;
        background-clip: initial;
        -webkit-text-fill-color: initial;
      }

      & ${PlanHeaderBox} {
        & h2 {
          color: ${({ theme }) => theme.colors.danger};
          background-image: initial;
          -webkit-background-clip: initial;
          background-clip: initial;
          -webkit-text-fill-color: initial;
        }
      }
      & ${PlanCheckMark} {
        border: 2px solid ${({ theme }) => theme.colors.danger};
        background: initial;
        & span,
        svg {
          color: ${({ theme }) => theme.colors.danger};
        }
      }

      & ${UpgradePlanButton} {
        border-color: ${({ theme }) => theme.colors.danger};
        color: ${({ theme }) => theme.colors.danger};
      }
    `}
`;
