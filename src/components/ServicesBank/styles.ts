import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.625rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 1024px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 460px){
    grid-template-columns: 1fr 1fr;
  }
`

export const ButtonItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: .625rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);
  border-radius: 0.313rem;
  width: 10.7269rem;
  height: 4.375rem;
  cursor: pointer;

  @media (max-width: 1024px){
    max-width: 8.5625rem;
  }

  @media (max-width: 460px){
    width: 100%;
    max-width: 9.563rem;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[400]};
    cursor: not-allowed;
  }
`

export const Text = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.938rem;
`
export const ButtonMarketplace = styled(ButtonItem)`
  @media (max-width: 1024px){
    display: none;
  }
  @media (max-width: 460px){
    display: flex;
  }
`
