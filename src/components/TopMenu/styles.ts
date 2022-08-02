import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  @media (max-width: 414px){
    gap: 1.5rem;
  }

`

export const DivItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: .625rem;
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);
  border-radius: 0.313rem;
  width: 10.7269rem;
  height: 4.375rem;
  @media (max-width: 1024px){
    width: 8.5625rem;
  }

  @media (max-width: 414px){
    width: 9.563rem;
  }
`

export const Text = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.938rem;
`
export const DivDisabled = styled(DivItem)`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.gray[400]};
  @media (max-width: 1024px){
    display: none;
  }
  @media (max-width: 414px){
    display: flex;
  }
`
