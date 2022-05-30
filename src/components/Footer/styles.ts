import styled from 'styled-components'

export const Container = styled.footer`
  max-width: 1640px;
  width: 100%;
  padding: 0 9.375rem 3.125rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  * {
    color: ${(props) => props.theme.colors.gray[700]};
  }

  @media(max-width: 1090px) {
    padding: 0 3.375rem 3.125rem;
  }

  @media(max-width: 860px) {
    flex-direction: column;
    gap: 3.75rem;
    padding: 0 1.375rem 3.125rem;
  }
`

export const About = styled.div`
  display: flex;
  gap: 5.9375rem;

  div {
    h3 {
      margin-bottom: 0.625rem;
    }

    li {
      & + li {
        margin-top: 0.625rem;
      }
    }
  }

  @media(max-width: 860px) {
    flex-direction: column;
    gap: 2.25rem;
    align-items: center;

    div {
      h3, li {
        text-align: center;
      }
    }
  }
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
`

export const SocialNetworks = styled.div`
  display: flex;
  gap: 2.1875rem;
  margin-bottom: 0.625rem;

  img {
    cursor: pointer;
  }
`
