import styled from 'styled-components'

import { Button } from 'components/Button'

export const Container = styled.main`
  width: 100%;
  max-width: 72.125rem;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  @media (min-width: 280px) and (max-width: 767px) {
    flex-direction: column;
    gap: 0;
  }
`

export const Content = styled.div`
  margin: 0 0 0 2rem;

  @media (min-width: 280px) and (max-width: 767px) {
   margin: 2rem;
  }
`

export const ContentTitle = styled.h2`
  font-weight: 900;
  font-size: 2rem;
  line-height: 1.6;
  max-width: 16ch;
  margin-bottom: 2.5rem;

  @media (min-width: 280px) and (max-width: 767px) {
    font-size: 1.5rem;
  }
`

export const ImageWrap = styled.div`
  margin: 0 2rem 0 0;

  @media (min-width: 280px) and (max-width: 767px) {
   max-width: 230px;
   order: -1;
   margin: 0 2rem;
  }
`

export const BackToHomePage = styled(Button)`
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  }

  @media (max-width: 340px) {
    font-size: .7rem;
  }
`
