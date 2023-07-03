import styled, { css } from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const SideBarMobileContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 0.625rem 0;
  width: 75vw;
  max-width: 24.25rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  z-index: 3;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 6.5rem;
  z-index: 2;
  background-color: ${({ theme }) => `${theme.colors.black}60`};
`;

export const Container = styled.div`
  position: relative;

  @media (min-width: 780px) {
    display: none;
  }
`;

export const MenuItem = styled(Link)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  padding: 1rem 0.2rem 1rem;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  & > svg {
    color: ${({ theme }) => theme.colors.mediumslateBlue};
  }
  & > p {
    margin-bottom: 0;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const SignOutButton = styled.button`
  padding: 1rem 0.2rem 1rem;
  width: 90%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.danger};
  margin: 0 0.5rem;
  & > p {
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0;
  }
`;

export const StyledButton = styled(Link)`
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  width: max-content;
  margin: 0 0.5rem;
  border-radius: 0.5rem;
  display: block;
  padding: 0.7rem 1.2rem;
  & > span {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const AnimatedContainer = styled(motion.nav)``;

export const EstablishmentContainer = styled.div<{
  hasEstablishment: boolean;
}>`
  ${({ hasEstablishment, theme }) =>
    !hasEstablishment &&
    css`
      background-color: ${theme.colors.gray[100]};
      color: ${theme.colors.gray[300]};
      border-radius: 0 0 0.2rem 0.2rem;
      & svg {
        color: ${theme.colors.gray[300]};
      }
    `}
`;
