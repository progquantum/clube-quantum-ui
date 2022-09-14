import styled from 'styled-components'
import Image from 'next/image'

import { Button } from 'components/Button'

export const Background = styled.main`
 margin: 1rem 0;
`

export const Container = styled.main`
  width: 100%;
  max-width: 72.125rem;
  margin: 0 auto;
`

export const CashBackContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7rem;
  margin: 6.5rem 4rem;

  @media(max-width: 1024px) {
    gap: 3rem;
  }

  @media(max-width: 700px) {
    flex-direction: column-reverse;
    justify-content: center;
    margin: 4rem 2rem;
  }
`

export const CashBackTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media(max-width: 1024px) {
    font-size: 1.75rem;
  }
`

export const CashBackText = styled.p`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin: 2.5rem 0;

  @media(max-width: 1024px) {
    font-size: 1.125rem;
  }
`

export const ArrowDownWrapper = styled.div`
  width: 100%;
  margin: 5rem 0;
  display: flex;
  justify-content: center;

  & > span {
    cursor: pointer;
  }

  @media(max-width: 700px) {
   display: none;
  }
`

export const HomePageButton = styled(Button)`
  background:  ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  border-radius: 2.5rem;

  &:hover {
    transition: none;
    background: ${({ theme }) => theme.colors.mediumslateBlue};
  }

  @media(max-width: 700px) {
   width: 100%;
  }
`

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 4rem;
  margin-bottom: 5rem;
  gap: 2rem;

  @media(max-width: 700px) {
    margin: 0 2rem;
    margin-bottom: 3rem;
    flex-direction: column;
    justify-content: center;
  }
`

export const WrapperLeft = styled(Wrapper)`
  flex-direction: row-reverse;

  @media(max-width: 700px) {
    flex-direction: column;
  }
`

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 32rem;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media(max-width: 700px) {
    gap: .75rem;
    width: 20rem;
    margin: 0 2rem;
  }
`

export const ContentTitle = styled.h2`
  font-weight: 600;
  font-size: 2.5rem;

  @media(max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media(max-width: 700px) {
    font-size: 1.2rem;
  }

  @media(max-width: 360px) {
    margin: 0 1.5rem;
  }
`
export const ContentTitleLeft = styled(ContentTitle)`
  @media(max-width: 700px) {
    margin-top: 3rem;
    text-align: end;
  }
`

export const ContentText = styled.p`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5;

  @media(max-width: 1024px) {
    font-size: 1rem;
  }

  @media(max-width: 700px) {
    font-size: .8rem;
  }

  @media(max-width: 360px) {
    margin: 0 1.5rem;
  }
`
export const ContentTextLeft = styled(ContentText)`
  @media(max-width: 700px) {
    text-align: end;
  }
`

export const ImageWrapper = styled(Image)`
  object-fit: cover;
  border-radius: 1.25rem;

  @media(max-width: 700px) {
   border-radius: .8rem;
  }
`

export const Line = styled.div`
  margin: 4rem auto;
  width: 18.75rem;
  border: 2px solid  ${({ theme }) => theme.colors.gray[50]};
  background-color:  ${({ theme }) => theme.colors.gray[50]};

  @media(max-width: 700px) {
    width: 14.75rem;
  }
`

export const FaqContainer = styled.div`
  margin: 5rem 4rem;

  & > h2 {
    margin-bottom: 3.125rem;
    font-weight: 800;
  }

  @media(max-width: 900px) {
    text-align: center;
  }

  @media(max-width: 700px) {
    margin: 4rem 2rem;
  }

  @media(max-width: 700px) {
    text-align: start;
  }

`

export const FaqBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  @media(max-width: 900px) {
    justify-content: center;
  }
`

export const FaqContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 30rem;
`

export const FaqImage = styled.div`

  @media(max-width: 900px) {
  display: none;
  }
`

export const Faq = styled.div`
  padding: 3rem;
  border: 3px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: 1.5rem;

  & > h3 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1.563rem;
  }

  & > p {
    font-weight: 500;
    font-size: .875rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  @media(max-width: 700px) {
    padding: 2rem;

  & > h3 {
    font-size: 1rem;
  }

  & > p {
    font-size: .775rem;
  }

  }
`
