import styled from 'styled-components';

import { Button } from 'components/Button';

export const Container = styled.header`
  width: 100%;
  max-width: 72.125rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
  position: relative;

  a {
    font-weight: 600;
    line-height: 1.3rem;
    color: ${({ theme }) => theme.colors.gray[700]};

    @media (max-width: 1024px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 860px) {
    padding: 1rem 3rem;
  }

  @media (max-width: 700px) {
    padding: 1rem 2rem;
  }
`;

export const BoxContainer = styled.div`
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.07);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.8rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

export const LoginButton = styled(Button)`
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  padding: 0.6rem 2rem;
  font-weight: 500;

  &:hover {
    transition: none;
    background: ${({ theme }) => theme.colors.mediumslateBlue};
  }

  @media (max-width: 1024px) {
    padding: 0.5rem 1.3rem;
    font-size: 0.8rem;
  }
`;

export const MenuMobile = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  position: absolute;
  top: 80px;
  right: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white};
  width: 16.25rem;
  height: 26rem;
  padding: 2.2rem 1.5rem;
  border-radius: 0 0 0 10px;
  box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.07);
  animation: showMenu 0.5s ease-in-out;

  @media (min-width: 861px) {
    display: none;
  }

  @media (max-width: 390px) {
    width: 14rem;
  }

  @keyframes showMenu {
    from {
      opacity: 0.5;
      transform: translateY(-100px);
    }

    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export const Line = styled.hr`
  height: 2px;
  width: 100%;
  border: none;
  background: transparent url(/images/line.svg) center no-repeat;
`;

export const LoginButtonMobile = styled(LoginButton)`
  width: 100%;
`;

export const MenuIconContainer = styled.div`
  display: none;

  @media (max-width: 860px) {
    display: block;
  }
`;

export const LogoContainer = styled.div`
  @media (max-width: 400px) {
    width: 40px;
  }
`;

export const Overlay = styled.div`
  background: transparent;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
`;
