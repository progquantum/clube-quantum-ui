import styled from 'styled-components';

export const MarketplaceButton = styled.button`
  all: unset;
  display: none;
  width: max-content;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  @media (min-width: 601px) {
    display: none;
  }

  @media (max-width: 430px) {
    padding: 1rem 1rem;
  }

  @media (max-width: 370px) {
    font-size: 80%;
  }
`;

export const MobileLayout = styled.div`
  display: flex;
  @media (max-width: 600px) {
    & ${MarketplaceButton} {
      display: block;
    }

    & div:first-child {
      display: none;
    }
  }
`;

export const LeftContent = styled.div`
  display: flex;
  margin-top: 4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 600px) {
    margin-top: initial;
  }
`;
