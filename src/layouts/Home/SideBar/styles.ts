import styled, { css } from 'styled-components'

import { Button } from 'components/Button'

export const Container = styled.header`
  width: 100%;
  padding: 1rem 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media(max-width: 700px) {
    padding: 1rem 2rem;
  }
`

export const Shadow = styled.div`
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.07);
`

interface MenuProps {
  isOpenedSideBar: boolean;
}

const responsiveFontSize = css`
  @media(max-width: 720px) {
    font-size: 1rem;
  }
`

export const Menu = styled.div<MenuProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  position: absolute;
  top: 85px;
  right: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1.5rem;

  transition: .5s all;

  ${({ isOpenedSideBar }) => isOpenedSideBar
    ? css`
      width: 260px;
      height: 700px;
      padding-top: 1.8rem;
      border-radius: 0 0 0 10px;

      @media(max-width: 720px) {
        height: 450px;
      }
    `
    : css`
      height: 0;
    `
  }

  a {
    font-weight: 600;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.midnightBlue};

    ${responsiveFontSize}
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
`

export const LoginButton = styled(Button)`
  background: linear-gradient(267.68deg, #001F80 -86.29%, #0C61FF 106.13%);
  padding: 0.5rem 1.8rem;
  font-weight: 500;
  width: 100%;
`

export const Line = styled.hr`
  height: 2px;
  width: 100%;
  border: none;
  background: transparent url(/images/line.svg) center no-repeat;
`
