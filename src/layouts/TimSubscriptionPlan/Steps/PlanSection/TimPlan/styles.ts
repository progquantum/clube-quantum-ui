import styled, { css } from 'styled-components';

export const PlanTitle = styled.h2`
  font-size: 1.75rem;
  margin-top: 2rem;
`;

export const PlanPrice = styled.h2`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const PlanPriceSubtitle = styled.span`
  margin-top: -1rem;
  font-size: 80%;
`;

export const ContractButton = styled.button`
  width: 90%;
  border-radius: 0.4rem;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.mediumslateBlue};
  color: ${({ theme }) => theme.colors.mediumslateBlue};
  padding: 0.5rem;
  margin: 0.5rem;
  transition: all 0.1s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumslateBlue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FreeAppsContainer = styled.div`
  padding: 0.5rem 0;
  & > span {
    display: block;
    color: ${({ theme }) => theme.colors.gray[400]};
    font-weight: 600;
  }
  & > div {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
  }
`;

export const PlanAdvantage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg {
    color: ${({ theme }) => theme.colors.royalblue};
  }
  & span {
    display: inline-block;
    width: 90%;
  }
`;

type PlanContainerProps = {
  selected: boolean;
};

export const PlanContainer = styled.div<PlanContainerProps>`
  display: flex;
  width: 22rem;
  height: 36rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  border-radius: 0.9rem;
  padding: 1.5rem 1rem 4rem;
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.1s ease;

  @media (max-width: 400px) {
    width: 100%;
  }
  ${props =>
    props.selected &&
    css`
      background-color: ${({ theme }) => theme.colors.mediumslateBlue};
      transform: scale(1.05);
      @media (max-width: 400px) {
        transform: initial;
      }
      & ${PlanTitle} {
        background-image: ${({ theme }) => theme.gradients.lightgreenToGreen};
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 2.5rem;
      }

      ${PlanPrice},
      ${PlanPriceSubtitle},
      ${FreeAppsContainer} > span,
      ${PlanAdvantage} > span,
      ${PlanAdvantage} > svg {
        color: ${({ theme }) => theme.colors.white};
      }

      ${ContractButton} {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.midnightBlue};
      }
    `}
`;
