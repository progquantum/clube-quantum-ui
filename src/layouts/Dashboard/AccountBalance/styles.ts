import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0rem 0rem 1.25rem rgba(0, 0, 0, 0.1);
  border-radius: .9375rem;
  min-width: 20.625rem;
  height: 9.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1.25rem 1.5rem;
  gap: 1rem;

  @media (max-width: 1024px){
    width: 27.0625rem;
    height: 8.3125rem;
  }

  @media (max-width: 414px){
    width: 20.625rem;

  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ContentHeader = styled.div`
  display: flex;
  gap: .625rem;
`

export const AccountBalanceButton = styled.button`
  background: none;
  border: none;
`

export const Title = styled.p`
  font-weight: 500;
  font-size: .625rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.gray[400]};
`

export const TextValue = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.375rem;
`

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: .75rem;
  line-height: .9375rem;
  color: ${({ theme }) => theme.colors.gray[300]};
`
