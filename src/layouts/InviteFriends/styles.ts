import styled, { css } from 'styled-components'

import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLink } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'

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

export const LinkButton = styled(Button)`
  align-items: start;
  flex-direction: column;
  padding: 1rem 1.875rem;
  margin-block: 2.2rem;
  line-height: 1.5;
  border: 2px solid ${({ theme }) => theme.colors.midnightBlue};
  border-radius: .625rem;
  max-width: 19rem;
`
export const InviteCode = styled.strong`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; 
`

const iconStyles = css`
  background-color: ${({ theme }) => theme.colors.midnightBlue};
  color: ${({ theme }) => theme.colors.white};
  width: 1.875rem;
  height: 1.875rem;
  padding: .3rem;
  border-radius: 50%;
`
export const Instagram = styled(FaInstagram)`
  ${iconStyles};
`
export const Facebook = styled(FiFacebook)`
  ${iconStyles};
`
export const WhatsApp = styled(FaWhatsapp)`
  ${iconStyles};
`

export const Mail = styled(HiOutlineMail)`
  ${iconStyles};
`
export const Link = styled(HiOutlineLink)`
  ${iconStyles};
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

export const ContainerSpan = styled.div`
  padding: 1rem 1.875rem;
  margin-bottom: 2.25rem;

  border: 2px solid ${({ theme }) => theme.colors.midnightBlue};
  border-radius: .625rem;

  width: 19.813rem;
  height: 4.5rem;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.midnightBlue};
}
`
export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

export const InviteButton = styled(Button)`
  gap: .9rem;
  padding: 0;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.gray[700]};
  background-color: transparent;
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
