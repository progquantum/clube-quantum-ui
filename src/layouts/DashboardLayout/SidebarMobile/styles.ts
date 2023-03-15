import styled from 'styled-components';

export const SideBarMobileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 1000;
`;

export const ItemMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  & svg {
    color: ${({ theme }) => theme.colors.mediumslateBlue};
  }
`;

export const CloseButton = styled.button`
  all: unset;
  color: ${({ theme }) => theme.colors.danger};
  position: absolute;
  top: 2rem;
  right: 3rem;
`;

export const LogOutButton = styled.button`
  all: unset;
  color: ${({ theme }) => theme.colors.danger};
  text-align: center;
  display: flex;
  gap: 1rem;
  margin: 1rem;
  align-items: center;
`;
