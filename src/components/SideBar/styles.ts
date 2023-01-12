import styled, { css } from 'styled-components';

import { Button } from 'components/Button';

import { NavButtonProps } from './types';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0rem 0rem 2rem rgba(41, 40, 40, 0.1);
  padding: 1rem;
  border-radius: 0.625rem;
  position: relative;
  width: 280px;

  @media (max-width: 780px) {
    display: none;
  }
`;

export const NavButton = styled.button<NavButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.gray['400']};

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > svg {
      font-size: 1.3rem;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.mediumslateBlue};
  }

  ${props =>
    props.activePath &&
    css`
      color: ${({ theme }) => theme.colors.mediumslateBlue};
      background-color: ${({ theme }) => theme.colors.ghostwhite};
      border-radius: 0.625rem;
    `}
`;

export const SubMenu = styled.div`
  border-left: 2px solid ${({ theme }) => theme.colors.light};
  margin-left: 25px;
  position: relative;
`;

export const SubMenuLink = styled.button<NavButtonProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: none;
  font-size: 0.9rem;
  padding: 0.8rem 1rem;
  transition: 0.3s all;

  color: ${({ theme }) => theme.colors.gray['400']};

  font-size: 0.9rem;

  > svg {
    font-size: 1rem;
  }

  ${props =>
    props.activePath &&
    css`
      color: ${({ theme }) => theme.colors.mediumslateBlue};
      width: 100%;

      &::before {
        content: '';
        display: flex;
        align-items: center;
        width: 1.8px;
        height: 20px;
        background-color: ${({ theme }) => theme.colors.mediumslateBlue};
        position: absolute;
        left: 0;
        padding: 0.7rem 0;
        margin-left: -2px;
      }
    `}

  &:hover {
    color: ${({ theme }) => theme.colors.mediumslateBlue};
    width: 100%;

    &::before {
      content: '';
      display: flex;
      align-items: center;
      width: 1.8px;
      height: 20px;
      background-color: ${({ theme }) => theme.colors.mediumslateBlue};
      position: absolute;
      left: 0;
      padding: 0.7rem 0;
      margin-left: -2px;
    }
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  border-top: 2px solid ${({ theme }) => theme.colors.light};
  padding-top: 1.5rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.gray['400']};
`;

export const UserData = styled.div`
  width: 100%;
  max-width: 11.8125rem;
  strong {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.gray['700']};
  }

  p {
    font-size: 0.6rem;
    overflow-wrap: break-word;
  }
`;

export const SignOut = styled(Button)`
  background: ${({ theme }) => theme.colors.dangerLight};
  justify-content: space-between;
  margin-top: 0;
  color: ${({ theme }) => theme.colors.danger};
  transition: 0.2s all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.dangerLight};
  }
`;
