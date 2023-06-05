import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { Button } from 'components/Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.5rem;
  position: relative;
  cursor: pointer;
`;

export const AnimatedDropdown = styled(motion.nav)`
  position: absolute;
  z-index: 10;
  top: 148%;
  right: 0;
  width: 13rem;
  box-shadow: 0 0rem 0.6rem rgba(0, 0, 0, 0.1);
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 1rem;
    height: 1rem;
    clip-path: polygon(50% 30%, 0% 100%, 100% 100%);
    top: -12%;
    right: 0.2rem;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const NavButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 0;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: ${theme.fontSizes.sm};
    background: ${theme.colors.white};
    color: ${theme.colors.mediumslateBlue};
    font-weight: 700;
    gap: 1rem;
    border-radius: 0;
    justify-content: space-between;
    transition: color, background 0.1s ease;
    & span {
      display: inline-block;
      width: 100%;
      text-align: left;
    }
    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.mediumslateBlue};
    }
  `}
`;

export const SignOutButton = styled(NavButton)`
  color: ${({ theme }) => theme.colors.danger};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.danger};
  }
`;
