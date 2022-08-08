import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;


  @media (max-width: 414px){
    gap: 0 1.5rem;
    margin: 0;
  }
`

export const DivItem = styled(Skeleton)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: .625rem;
  border-radius: 0.313rem;
  width: 10.7269rem;
  height: 4.375rem;

  @media (max-width: 1024px){
    width: 8.5625rem;
  }

  @media (max-width: 414px){
    width: 9.563rem;
    gap: 0;

  }
`
export const DivDisabled = styled.div`

  @media (max-width: 1024px){
    display: none;
  }
  @media (max-width: 414px){
    display: flex;
  }
`
