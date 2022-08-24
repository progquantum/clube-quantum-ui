import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 820px){
    display: none;
  }
`

export const Content = styled(Skeleton)`
  width: 18.5625rem;
  height: 46.125rem;
  border-radius: 0.625rem;
`
