import styled, { css } from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 0.4rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

interface MenuProps {
  isOpenedSideBar: boolean;
}

const responsiveFontSize = css`
  @media(max-width: 720px) {
    font-size: 1.5rem;
  }
`

export const Menu = styled.div<MenuProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  position: absolute;
  top: 67px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  transition: all 0.5s ease;

  ${({ isOpenedSideBar }) => isOpenedSideBar
    ? css`
      height: 450px;
      padding-top: 2rem;

      @media(max-width: 720px) {
        height: 400px;
      }
    `
    : css`
      height: 0;
    `
  }

  a {
    font-weight: 600;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gray[700]};

    ${responsiveFontSize}
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

  p {
    font-size: 2rem;
    text-align: center;

    ${responsiveFontSize}
  }
`
