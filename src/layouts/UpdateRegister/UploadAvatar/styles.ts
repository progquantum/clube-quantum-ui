import styled from 'styled-components'

import { Button } from 'components/Button'

export const Container = styled.div`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: .5rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1.25rem 1.5rem;
`

export const EditAvatar = styled(Button)`
  width: 100%;
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  padding: .9rem 1.8rem;
  border-radius: 6.25rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.mediumslateBlue};
    transition: none;
  }

  h2 {
    font-weight: 500;
    font-size: .875rem;
    color:  ${({ theme }) => theme.colors.white};
  }
`

export const Avatar = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  border-radius: 50%;
`
