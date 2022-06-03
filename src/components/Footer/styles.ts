import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'
import styled, { css } from 'styled-components'

export const Container = styled.footer`
  max-width: 1640px;
  width: 100%;
  padding: 0 9.375rem 3.125rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  * {
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  @media(max-width: 1090px) {
    padding: 0 3.375rem 3.125rem;
  }

  @media(max-width: 860px) {
    flex-direction: column;
    gap: 3.75rem;
    padding: 0 1.375rem 3.125rem;
  }
`

export const About = styled.div`
  display: flex;
  gap: 5.9375rem;

  @media(max-width: 860px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.25rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`

export const Wrap = styled.div`
  h3 {
    margin-bottom: 0.625rem;
    font-size: 1.125rem;
  }
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;

  h4 {
    font-size: 1rem;
  }

  h2 {
    font-size: 1.25rem;
  }
`

export const SocialNetworks = styled.div`
  display: flex;
  gap: 2.1875rem;
  margin-bottom: 0.625rem;
`

const icons = css`
  width: 26px;
  height: 26px;
  cursor: pointer;
`

export const Instagram = styled(AiOutlineInstagram)`
  ${icons}
`

export const Twitter = styled(AiOutlineTwitter)`
  ${icons}
`

export const Facebook = styled(RiFacebookFill)`
  ${icons}
`
