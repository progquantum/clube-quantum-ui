import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { Button } from 'components/Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const AnimatedDropdown = styled(motion.nav)`
  ${({ theme }) => css`
    position: absolute;
    z-index: 10;
    top: 148%;
    right: 0;
    min-width: 9.123rem;
    border-radius: ${theme.radiis.small};
    background: ${theme.colors.ghostwhite};
    box-shadow: 0 0rem 0.6rem rgba(0, 0, 0, 0.1);

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -24%;
      right: 8%;
      border-color: ${`transparent transparent ${theme.colors.ghostwhite} transparent `};
      border-style: solid;
      border-width: 0.8rem;
    }
  `}
`;

export const NavButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 0;
    height: 50px;
    justify-content: space-between;
    font-size: ${theme.fontSizes.sm};
    background: ${theme.colors.ghostwhite};
    color: ${theme.colors.midnightBlue};

    &:hover {
      color: ${theme.colors.midnightBlue};
      background: ${theme.colors.background};
    }

    &:first-child {
      border-radius: ${theme.radiis.smallTop};
    }

    &:nth-child(n + 2):nth-child(-n + 8) {
      border-radius: 0px;
    }

    &:last-child {
      color: ${theme.colors.danger};
      border-radius: ${theme.radiis.smallBottom};
    }
  `}
`;
