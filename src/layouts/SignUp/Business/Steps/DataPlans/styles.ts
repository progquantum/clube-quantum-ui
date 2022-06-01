import styled from 'styled-components'
import { IoMdCheckbox } from 'react-icons/io'
import { MdDoNotDisturbOn } from 'react-icons/md'

export const Container = styled.div`
  width: 100%;
  max-width: 53.4375rem;
  margin: 0 auto;

  section {
    width: 100%;
    display: flex;
  }

  > section {
    align-items: flex-end;
    gap: 1.5rem;

    @media(max-width: 900px) {
      > span {
        display: none !important;
      }
    }
  }

  section:last-of-type {
    justify-content: center;
    margin-top: 5rem;
  }
`

export const Plans = styled.div`
  width: 100%;

  div {
    width: 100%;
    padding: 0.4rem;
    border-radius: 5rem;
    border: 6px solid ${({ theme }) => theme.colors.midnightBlue};

    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      width: 100%;
      text-align: center;
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.midnightBlue};
      border-radius: 5rem;
      cursor: pointer;

      &.selected-plan {
        background-color: ${({ theme }) => theme.colors.midnightBlue};
        color: #ffffff;
      }

      @media(max-width: 525px) {
        font-size: 0.9rem;
      }
    }
  }

  p {
    text-align: center;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.midnightBlue};
  }
`

export const Button = styled.button`
  padding: 1rem 1.875rem;
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.colors.midnightBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.75rem;
  font-weight: 900;
`

export const PlansContents = styled.section`
  margin-top: 6.25rem;
  color: ${({ theme }) => theme.colors.gray[700]};

  div {
    width: 100%;
    padding: 3.75rem 1.875rem 5rem;
    background: #FFFFFF;
    box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    h2 {
      font-size: 1.25rem;
      margin: 1.5625rem 0 2.1875rem;
      color: ${({ theme }) => theme.colors.midnightBlue};
    }

    ul {
      margin-top: 3.125rem;

      li {
        display: flex;
        align-items: flex-start;

        & + li {
          margin-top: 2.5rem;
        }

        span {
          margin-top: 0.2rem;
          margin-right: 0.5rem;
        }
      }
    }
  }

  @media(max-width: 910px) {
    flex-direction: column;
    max-width: 70%;
    transform: translateX(25%);
  }

  @media(max-width: 520px) {
    max-width: 100%;
    transform: translateX(0%);
  }
`

export const CheckedCheckBox = styled(IoMdCheckbox)`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.midnightBlue};
`

export const NotIncludedIcon = styled(MdDoNotDisturbOn)`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.gray[200]};
`
