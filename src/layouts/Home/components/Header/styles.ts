import styled from 'styled-components'
import { FiUser } from 'react-icons/fi'

export const Container = styled.header`
  width: 100%;
  padding: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  > img {
    width: 3.3rem;
    height: 4.3rem;
    cursor: pointer;
  }

  a {
    font-weight: 600;
    font-size: 1.125rem;
    color: #3D3D3D;
    text-decoration: none;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;

    /* @media (max-width: 1040px) {
      display: none;
    } */
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const UserIcon = styled(FiUser)`
  height: 2rem;
  width: 2rem;
  margin-right: 0.8125rem;
`
