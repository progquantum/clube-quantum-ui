import styled from 'styled-components'
import { FiUser } from 'react-icons/fi'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.55rem 7.5rem;

  a {
    font-weight: 600;
    line-height: 1.3rem;
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  animation: show 0.3s ease-in forwards;

  @keyframes show {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UserIcon = styled(FiUser)`
  height: 2rem;
  width: 2rem;
  margin-right: 0.8125rem;
`
