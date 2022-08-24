import styled from 'styled-components'

import { Button } from 'components/Button'

export const Container = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 2fr;
  gap: 2rem;
  grid-template-areas:
  "Container Container"
  "DivMarketplace DivMarketplace"
  "DivSelectPlan DivInviteFriends";

@media (max-width:1024px ){
  display: flex;
  flex-direction: column;
  align-items: center;
}
`

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
  gap: .625rem;
  border-radius: .9375rem;

@media (max-width: 1024px) {
  width: 27.0625rem;
  gap: 1.25rem;
}

@media (max-width: 460px) {
  width: 20.625rem;
}
`
export const ItemMarket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .625rem;
  cursor: not-allowed;
`
export const AccessMarket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`
export const HeaderAccessMarket = styled.div`
  display: flex;
  flex-direction: row;
  gap: .625rem;
`
export const MarketText = styled.p`
  font-weight: 500;
  font-size: .75rem;
  line-height: .9375rem;
  color: ${({ theme }) => theme.colors.lightsteelblueice};
`
export const ComingSoon = styled.span`
  position: absolute;
  top: -20px;
  left: -25px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  padding: 10px 20px;
  border-radius: 50px;

  @media (max-width: 1024px){
    left: -22px;
  }

  @media (max-width: 460px){
    left: -12px;
  }
`
export const ButtonMarketplace = styled(Button)`
  background: ${({ theme }) => theme.colors.lightsteelblueice};
  color: ${({ theme }) => theme.colors.cornflowerblue};
  height: 2.3125rem;

  &:disabled {
    cursor: not-allowed;
  }

`

export const DivSelectPlan = styled.div`
  grid-area: DivSelectPlan;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25rem 1.5rem;
  gap: 1.5rem;
  width: 21.4688rem;
  height: 15.375rem;
  border-radius: .9375rem;
  box-shadow: 0rem 0rem 1.25rem rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width:1024px ){
    width: 27.0625rem;
  }
  
  @media (max-width: 460px){
    width: 20.625rem;
  }
`

export const HeaderSelectPlan = styled(HeaderAccessMarket)``

export const TitlePlan = styled.span`
  font-weight: 500;
  font-size: .625rem;
  line-height: 1.25rem;
`
export const DivStatusPlan = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const TitleStatusPlan = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.success};
`
export const StatusPlan = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.success};
`

export const ManageButton = styled(Button)`
  width: 100%;
  height: 2.3125rem;
  font-size: .875rem;
  line-height: 1.0625rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

`

export const Deadline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const TextDeadline = styled.p`
  font-weight: 500;
  font-size: .75rem;
  line-height: .9375rem;
  color: ${({ theme }) => theme.colors.gray[300]};
  line-height: 1.25rem;
  width: 135.75px;
`

export const ButtonCancel = styled(Button)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.danger};
  font-size: .875rem;
  line-height: 1.0625rem;
  height: 37px;
  width: 135.75px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const DivInviteFriends = styled.div`
  grid-area: DivInviteFriends;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25rem 1.5rem;
  gap: 1.5rem;
  width: 21.4688rem;
  height: 15.375rem;
  background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: .9375rem;

  @media (max-width:1024px ){
    width: 27.0625rem;
  }

  @media (max-width: 460px){
    width: 20.625rem;
  }
`

export const HeaderInviteFriends = styled(HeaderAccessMarket)``

export const TitleFriends = styled(TitlePlan)`
  color: ${({ theme }) => theme.colors.white};
`

export const TitleInviteFriends = styled(TitleStatusPlan)`
  color: ${({ theme }) => theme.colors.white};
`

export const TextInviteFriends = styled(StatusPlan)`
  color: ${({ theme }) => theme.colors.white};
`

export const ButtonInviteFriends = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.midnightBlue};
  border: 2px solid ${({ theme }) => theme.colors.white};
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue} ;
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.white};
  }
`
