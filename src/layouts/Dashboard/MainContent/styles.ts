import styled from 'styled-components';

import { Button } from 'components/Button';

export const Container = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 2fr;
  gap: 2rem;
  grid-template-areas:
    'Container Container'
    'DivMarketplace DivMarketplace'
    'DivSelectPlan DivInviteFriends';

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DivMarketplace = styled.div`
  grid-area: DivMarketplace;
  position: relative;
  background-color: ${({ theme }) => theme.colors.mediumslateblue};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1.875rem 2.5rem 1.875rem 1.875rem;
  gap: 0.625rem;
  border-radius: 0.625rem;

  @media (max-width: 1024px) {
    width: 27.0625rem;
    gap: 1.25rem;
  }

  @media (max-width: 460px) {
    width: 20.625rem;
  }

  @media (max-width: 380px) {
    width: 19rem;
  }
`;

export const ItemMarket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  cursor: not-allowed;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.mediumslateblue};
    background: ${({ theme }) => theme.colors.lightsteelblueice};
    padding: 4px;
    border-radius: 50%;
  }
`;

export const AccessMarket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`;

export const HeaderAccessMarket = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;

  > svg {
    color: ${({ theme }) => theme.colors.lightsteelblueice};
  }
`;

export const MarketText = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  color: ${({ theme }) => theme.colors.lightsteelblueice};
`;

export const ComingSoon = styled.span`
  position: absolute;
  top: -20px;
  left: -25px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  padding: 10px 20px;
  border-radius: 50px;

  @media (max-width: 1024px) {
    left: -22px;
  }

  @media (max-width: 460px) {
    left: -12px;
  }
`;

export const ButtonMarketplace = styled(Button)`
  background: ${({ theme }) => theme.colors.lightsteelblueice};
  color: ${({ theme }) => theme.colors.cornflowerblue};
  height: 2.3125rem;

  &:hover {
    background: ${({ theme }) => theme.colors.lightsteelblueice};
    color: ${({ theme }) => theme.colors.cornflowerblue};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const DivSelectPlan = styled.div`
  grid-area: DivSelectPlan;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25rem 1.5rem;
  gap: 1.5rem;
  width: 21.4688rem;
  height: 15.375rem;
  border-radius: 0.625rem;
  box-shadow: 0rem 0rem 1.25rem rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 1024px) {
    width: 27.0625rem;
  }

  @media (max-width: 460px) {
    width: 20.625rem;
  }

  @media (max-width: 380px) {
    width: 19rem;
  }
`;

export const HeaderSelectPlan = styled(HeaderAccessMarket)`
  color: ${({ theme }) => theme.colors.gray['300']};
  > svg {
    font-size: 1.0625rem;
    color: ${({ theme }) => theme.colors.gray['300']};
  }
`;

export const TitlePlan = styled.span`
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 1.25rem;
`;
export const DivStatusPlan = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TitleStatusPlan = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.success};
`;
export const StatusPlan = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.success};
`;

export const ManageButton = styled(Button)`
  margin-top: 0;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Deadline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TextDeadline = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  color: ${({ theme }) => theme.colors.gray[300]};
  line-height: 1.25rem;
  width: 135.75px;
`;

export const ButtonCancel = styled(Button)`
  font-size: 0.875rem;
  line-height: 1.0625rem;
  height: 37px;
  width: 135.75px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const TitleCancelPlan = styled.h4`
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.6;
  margin: 1rem 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray['400']};
`;
