import styled, { css } from 'styled-components'

export const Container = styled.main`
  max-width: 80rem;
  width: 100%;
  margin: 6rem auto;
  color: ${({ theme }) => theme.colors.gray[700]};

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;

  @media(max-width: 720px) {
    flex-direction: column;
    align-items: center;
    gap: 70px;

    h2 {
      text-align: center;
    }
  }
`

const wrapperStyles = css`
  max-width: 370px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`

export const LeftWrapper = styled.div`
  ${wrapperStyles}

  h2 {
    color: ${({ theme }) => theme.colors.cherryPie};
    font-weight: 900;
  }
`

export const RightWrapper = styled.div`
  ${wrapperStyles}

  p {
    font-size: 0.75rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.gray[700]};
    text-align: center;
  }

  > span {
    margin-bottom: 1.5rem !important;
  }
`

export const Box = styled.div`
  width: 100%;
  height: 388px;
  position: relative;
  margin-top: 2rem;

  display: flex;
  align-items: center;

  ul {
    margin-left: 1.5rem;
    z-index: 1;

    li {
      color: ${({ theme }) => theme.colors.cherryPie};
      font-weight: 700;
      font-size: 1.125rem;

      & + li {
        margin-top: 1.25rem;
      }
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 84px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.paleturquoise};
    border-radius: 50px;
  }
`

export const Badges = styled.div`
  margin-top: 1.5rem;

  display: flex;
  justify-content: center;
  gap: 1.875rem;
`
