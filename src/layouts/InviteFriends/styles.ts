import styled from 'styled-components'

export const Container = styled.main`
width: 100%;
max-width: 70.625rem;
 margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-around;
margin-block: 5rem;

h1 {
  font-weight: 900;
  font-size: 2rem;
  line-height: 1.4;
  margin: 5rem 0 1.875rem;
  max-width: 18ch;
}

p {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.3;
  max-width: 30ch;
  margin-bottom: 2.5rem;
}


`
export const ContainerContent = styled.div`
@media (min-width: 280px) and (max-width: 767px) {
  margin-inline: 2.5rem;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 992px) {
  margin-inline: 2.5rem;
  margin-bottom: 1rem;
}
`

export const ImageDiv = styled.div`
@media (min-width: 280px) and (max-width: 767px) {
  display: none;
}
`

export const ContainerSpan = styled.div`
  padding: 1rem 1.875rem;
  margin-bottom: 2.25rem;
  
  border: 2px solid ${({ theme }) => theme.colors.midnightBlue};
  border-radius: .625rem;

  width: 19.813rem;
  height: 4.5rem;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.midnightBlue};
}
`
export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`
export const ContainerAlignLinks = styled.div`
  display: flex;
  align-items: center;
  gap: .9rem;
  a {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`
