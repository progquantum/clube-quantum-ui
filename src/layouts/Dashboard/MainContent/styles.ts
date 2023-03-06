import styled from 'styled-components';

import { Button } from 'components/Button';

export const Container = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  grid-template-areas:
    'Container Container'
    'DivMarketplace DivMarketplace'
    'Wrapper Wrapper';

  @media (max-width: 1230px) {
    display: flex;
    flex-direction: column;
    margin: 2rem 5rem;
  }
  @media (max-width: 590px) {
    margin: 2rem 1rem;
  }
`;
export const ImageWrap = styled.span`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  & > img {
    max-width: 100%;
    border-radius: 0.9rem;
  }
`;

export const DivMarketplace = styled.div`
  display: flex;
  grid-area: DivMarketplace;
  background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.6rem;
  border-radius: 0.9rem;
  gap: 1rem;
  @media (max-width: 1230px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AccessMarket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
  @media (max-width: 1230px) {
    margin-left: 0;
  }
`;

export const HeaderAccessMarket = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
  > svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
  }
`;

export const MarketText = styled.p`
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 0.9375rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonMarketplace = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.midnightBlue};
  height: 2.5rem;
  padding: 1.5rem 6rem;
  width: 100%;
  align-self: center;
  @media (max-width: 550px) {
    width: 100%;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.lightsteelblueice};
    color: ${({ theme }) => theme.colors.midnightBlue};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const AccountBalanceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  grid-area: Container;
`;

export const Wrapper = styled.div`
  grid-area: Wrapper;
  display: flex;
  gap: 2rem;
  width: 100%;
  & > div {
    flex: 1;
  }

  @media (max-width: 1230px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
