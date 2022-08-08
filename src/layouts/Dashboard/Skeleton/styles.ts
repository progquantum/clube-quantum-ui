import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

export const MenuGrid = styled.div`
width: 100%;
margin: 2rem 0;
gap: 1rem;
display: flex;
flex-direction: column;
align-items: center;
`

export const AccountCotainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0rem 2rem;
  @media (max-width: 1024px){
    flex-direction: column;
  }
`

export const AccountBalance = styled(Skeleton)`
  border-radius: .9375rem;
  width: 21.4681rem;
  height: 9.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1.25rem 1.5rem;
  gap: 1rem;

  @media (max-width: 1024px){
    width: 27.0625rem;
    height: 8.3125rem;
  }

  @media (max-width: 414px){
    width: 20.625rem;

  }
`
export const AccountBalanceIncoming = styled(Skeleton)`
  grid-area: AccountBalanceIncoming;
  border-radius: .9375rem;
  width: 21.4681rem;
  height: 9.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1.25rem 1.5rem;
  gap: 1rem;

  @media (max-width: 1024px){
    width: 27.0625rem;
    height: 8.3125rem;
  }

  @media (max-width: 414px){
    width: 20.625rem;

  }
`

/* Styled DivMarketplace */
export const DivMarketplace = styled(Skeleton)`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
width: 44.9363rem;
height: 9.5625rem;
padding: 1.875rem 2.5rem 1.875rem 1.875rem;
gap: .625rem;
border-radius: .9375rem;

@media (max-width: 1024px){
  width: 27.0625rem;

}

@media (max-width: 414px){
  width: 20.625rem;
  height: 19.0106rem;
}
`

export const CotainerPlan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0rem 2rem;
  @media (max-width: 1024px){
    flex-direction: column;
  }
`

/* Styled DivSelectPlan */
export const DivSelectPlan = styled(Skeleton)`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1.25rem 1.5rem;
gap: 1.5rem;
width: 21.4688rem;
height: 15.375rem;
border-radius: .9375rem;


@media (max-width:1024px ){
  width: 27.0625rem;
}
@media (max-width: 414px){
  width: 20.625rem;
}

`

/* Styled DivInviteFriends */
export const DivInviteFriends = styled(Skeleton)`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1.25rem 1.5rem;
gap: 1.5rem;
width: 21.4688rem;
height: 15.375rem;


border-radius: .9375rem;
@media (max-width:1024px ){
  width: 27.0625rem;
}
@media (max-width: 414px){
  width: 20.625rem;
}
`
