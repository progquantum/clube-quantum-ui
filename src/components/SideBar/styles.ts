import styled, { css } from 'styled-components';

import Link from 'next/link';

import { Button } from 'components/Button';

import { NavButtonProps, IsExpanded } from './types';

export const Container = styled.nav<IsExpanded>`
  display: flex;
  flex-direction: column;
  box-shadow: 0rem 0rem 2rem rgba(41, 40, 40, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  width: max-content;
  margin-top: 2rem;
  align-self: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 780px) {
    display: none;
  }
`;

export const IconBox = styled.div<IsExpanded>`
  ${({ isExpanded }) =>
    !isExpanded &&
    css`
      margin: 0 auto;
    `}
`;

export const ToggleButtonBox = styled(IconBox)`
  margin: 1rem 0 0;
  font-size: 1.8rem;
  width: max-content;
  padding: 0 0.4rem 0.3rem;
  color: ${({ theme }) => theme.colors.mediumslateBlue};
  cursor: pointer;
  transition: all 0.1s ease;
  border-radius: 0.3rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumslateBlue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const TitleBox = styled.span`
  display: block;
`;

export const NavButton = styled.button<NavButtonProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: none;
  padding: 1.3rem 0.2rem;
  margin: 0 0.3rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray[100]};
  font-weight: 500;
  ${({ isExpanded }) =>
    !isExpanded
      ? css`
          & ${TitleBox} {
            display: none;
          }
          border-bottom: 0.8px solid transparent;
        `
      : css`
          min-width: 15rem;
          & ${TitleBox} {
            display: block;
          }
          &:hover {
            background-color: ${({ theme }) => theme.colors.gray[100]};
          }
        `}

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    > svg {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.mediumslateBlue};
    }
  }

  ${props =>
    props.activePath &&
    css`
      color: ${({ theme }) => theme.colors.mediumslateBlue};
      background-color: ${({ theme }) => theme.colors.ghostwhite};
      border-radius: 0.625rem;
    `}
`;

export const SignOut = styled(Button)<IsExpanded>`
  background: ${({ theme }) => theme.colors.white};
  justify-content: space-around;
  gap: 4rem;
  color: ${({ theme }) => theme.colors.danger};
  transition: 0.2s all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.dangerLight};
  }

  ${({ isExpanded }) =>
    !isExpanded
      ? css`
          & ${TitleBox} {
            display: none;
          }
        `
      : css`
          & ${TitleBox} {
            display: block;
          }
        `}
`;
