import styled from 'styled-components'

import { ContentsWrapperProps } from './types'

export const Container = styled.main`
  width: 100%;
  margin-bottom: 6.25rem;
`

export const ContentsWrapper = styled.div<ContentsWrapperProps>`
  width: 100%;
  margin-top: ${(props) => props.width}rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Contents = styled.div`
  max-width: 1640px;
  width: 100%;
  margin-top: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media(max-width: 900px) {
    padding: 0 1.875rem;

    > img {
      display: none;
    }
  }
`
