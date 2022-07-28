import styled from 'styled-components'

import { Button } from 'components/Button'

export const Container = styled.main`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.5rem;
  padding: 5rem 2rem;

  @media (min-width: 280px) and (max-width: 767px) {
    margin-inline: 1rem 3rem;
  }
`

export const Heading = styled.h1`
  font-weight: 900;
  font-size: 2rem;
  line-height: 1.4;
  max-width: 18ch;
  margin-bottom: 2rem;
`

export const Content = styled.p`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.3;
  max-width: 30ch;
`

export const Wrap = styled.div`
  @media (min-width: 280px) and (max-width: 767px) {
    margin: 1rem 3rem;
  }
`

export const ImageDiv = styled.div`
  @media (min-width: 280px) and (max-width: 767px) {
    display: none;
  }
`

export const ButtonPlan = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeadingInfo = styled.h2`
  margin: 2.5rem 0;
  max-width: 25ch;
  line-height: 1.3;
  font-weight: 900;
`
export const InfoButton = styled(Button)`
  font-weight: 600;
  padding: .7rem 0;
`
