import styled, { css } from 'styled-components'
import { IoMdCheckbox } from 'react-icons/io'
import { MdDoNotDisturbOn } from 'react-icons/md'
import { BiInfoCircle } from 'react-icons/bi'

import { Active } from './types'

export const Container = styled.div`
  width: 100%;
  max-width: 59.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  section {
    width: 100%;
    display: flex;

    &:last-of-type {
      justify-content: center;
      margin-top: 5rem;
    }
  }

  @media(max-width: 1320px) {
    width: 24.0625rem;
  }
`

export const Wrapper = styled.div`
  width: 22.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;

  @media(max-width: 900px) {
    > span {
      display: none !important;
    }
  }
`
export const Text = styled.p`
  font-weight: 500;
  font-size: .75rem;
  line-height: .9375rem;
  text-align: center;
`
export const Subtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.midnightBlue};
`
export const PlansWrapper = styled.div`
  width: 100%;
  padding: 2px;
  border-radius: 5rem;
  border: 2px solid ${({ theme }) => theme.colors.midnightBlue};

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.h2`
  font-weight: 900;
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.midnightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PlanType = styled.h4<Active>`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.midnightBlue};
  border-radius: 5rem;
  cursor: pointer;
  font-size: .875rem;
  line-height: 1.0625rem;
  padding: 10px 29px;

  ${(props) => props.isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.midnightBlue};
      color: #ffffff;
    `
  }

  @media(max-width: 525px) {
    font-size: 0.9rem;
  }
`
export const Button = styled.button<Active>`
  padding: .625rem 1.8125rem;
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.colors.midnightBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.75rem;
  font-weight: 500;

  ${(props) => props.isActive &&
    css`
      background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
    `
  }
`
export const PlansContents = styled.section`
  color: ${({ theme }) => theme.colors.gray[700]};
  gap: 1.5rem;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 1320px) {
    flex-direction: column;
  }
`
export const PlanContentsWrapper = styled.div<Active>`
  width: 100%;
  padding: 3.75rem 1.875rem 5rem;
  background: #FFFFFF;
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.25rem;
    margin: 1.5625rem 0 2.1875rem;
    color: ${({ theme }) => theme.colors.midnightBlue};
  }

  @media(max-width: 1320px) {
    width: 21.875rem;
  }

  @media(max-width: 460px ){
    width: 20.625rem;
  }

  ${(props) => props.isActive &&
    css`
      box-shadow: 2px 4px 20px rgba(0, 31, 128, 0.25);
      transform: scale(1.1);
      margin: 0 1.25rem;
      transition: 0.4s;

      @media(max-width: 910px) {
        transform: scale(1.05, 1);
        margin: 1.25rem 0;
      }
    `
  }
`
export const TitlePlan = styled.h3`
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: center;
  margin-bottom: .625rem;
`
export const PlanItemsList = styled.ul`
  margin-top: 3.125rem;

  li {
    display: flex;
    align-items: flex-start;
    font-weight: 500;
    font-size: .875rem;
    line-height: 1.0625rem;
    justify-content: space-between;

    & + li {
      margin-top: 2.5rem;
    }

    span {
      margin-top: 0.2rem;
      margin-right: 0.5rem;
    }
  }
`
export const PlanItem = styled.div`
  margin-right: .3125rem;
  display: flex;
  align-items: center;
`
export const CheckedCheckBox = styled(IoMdCheckbox)`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.midnightBlue};
`
export const NotIncludedIcon = styled(MdDoNotDisturbOn)`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.gray[200]};
`
export const InfoIcon = styled(BiInfoCircle)`
  font-size: .625rem;
  display: flex;
  align-items: flex-start;
`
