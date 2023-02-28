import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import styled, { css } from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40rem;
  box-shadow: 0 -15px 20px 0px #00000012;
  padding: 3.125rem 0;

  * {
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  @media (max-width: 1090px) {
    gap: 24rem;
  }

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3.75rem;
    padding: 3.125rem 2rem;
  }
`;

export const About = styled.div`
  display: flex;
  gap: 5.9375rem;

  @media (max-width: 860px) {
    flex-direction: column;
    gap: 2.25rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const Heading = styled.h3`
  margin-bottom: 0.625rem;
  font-size: 1.125rem;
`;

export const HeadingContact = styled.h4`
  font-size: 1rem;
`;

export const HeadingNumber = styled.h2`
  font-size: 1.25rem;
`;

export const SocialNetworks = styled.div`
  display: flex;
  gap: 2.1875rem;
  margin-bottom: 0.625rem;
`;

const icons = css`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

export const Instagram = styled(AiOutlineInstagram)`
  ${icons}
`;

export const Twitter = styled(AiOutlineTwitter)`
  ${icons}
`;

export const Facebook = styled(RiFacebookFill)`
  ${icons}
`;
