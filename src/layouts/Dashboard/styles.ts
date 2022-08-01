import styled, { css } from 'styled-components'

export const Container = styled.main`
  max-width: 72.125rem;
  width: 100%;
  margin: 5rem auto;
  color: ${({ theme }) => theme.colors.gray[700]};
  gap: 3.375rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
`

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 42px;





`
export const MenuGrid = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 32px;
  grid-template-areas:
  "DivBalance DivRelease"
  "DivMarketplace DivMarketplace"
  "DivSelectplan DivInviteFriends";

  @media (max-width:1024px ){
    display: flex;
    flex-direction: column;

  }

`

export const DivBalance = styled.div`
  grid-area: DivBalance;
  box-shadow: 0rem 0rem 1.25rem rgba(0, 0, 0, 0.1);
  border-radius: .9375rem;
  min-width: 20.625rem;
  height: 9.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1.25rem 1.5rem;
  gap: 2rem;
`
export const DivRelease = styled(DivBalance)`
  grid-area: DivRelease;
`
export const DivMarketplace = styled.div`
  grid-area: DivMarketplace;
`
export const DivSelectplan = styled.div`
grid-area: DivSelectplan;
`

export const DivInviteFriends = styled.div`
grid-area: DivInviteFriends;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const ContentHeader = styled.div`
  display: flex;
  gap: .625rem;

`

export const Title = styled.p`
  font-weight: 500;
  font-size: .625rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.gray[400]};
`
export const TextValue = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.375rem;
`

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: .75rem;
  line-height: .9375rem;
  color: ${({ theme }) => theme.colors.gray[300]};
`
