import styled, { css } from 'styled-components';

import { IoCloseOutline } from 'react-icons/io5';

import { Active } from './types';

export const Container = styled.div`
  width: 100%;
  max-width: 1179px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 30px;

  section {
    width: 100%;
    display: flex;

    &:last-of-type {
      justify-content: center;
      margin-top: 5rem;

      @media (max-width: 500px) {
        margin-top: 2rem;
      }
    }
  }

  @media (max-width: 1320px) {
    width: 24.0625rem;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 22.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;

  margin: 0px 0 38px 0;
  @media (max-width: 1320px) {
    margin: 0;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    > span {
      display: none !important;
    }
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
`;

export const Subtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.gray['400']};
`;

export const PlansWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(267.68deg, #001f80 -86.29%, #0c61ff 106.13%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 150%;
  background: linear-gradient(262.28deg, #0048cf -13.86%, #001454 149.18%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;

  @media (max-width: 541px) {
    font-size: 14px;
  }
`;

export const PlanType = styled.h4<Active>`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 10px 0;
  margin: 0 auto;
  text-align: center;

  ${props =>
    props.isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.gray['700']};
      border: 2px solid ${({ theme }) => theme.colors.mediumslateBlue}; ;
    `}

  @media (max-width: 525px) {
    font-size: 0.9rem;
  }
`;

export const Button = styled.button<Active>`
  padding: 1rem 1.8125rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.mediumslateBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  ${props =>
    props.isActive &&
    css`
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.mediumslateBlue};
      font-weight: 600;
    `}
`;

export const PlansContents = styled.section`
  color: ${({ theme }) => theme.colors.gray[700]};
  gap: 16px;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  align-items: center;

  @media (max-width: 1320px) {
    flex-direction: column;
  }
`;

export const PlanContentsWrapper = styled.div<Active>`
  width: 382px;
  padding: 2rem 1.5rem;
  min-height: 598.25px;
  background: #ffffff;
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  @media (max-width: 1320px) {
    width: 21.875rem;
  }

  @media (max-width: 460px) {
    width: 300px;
  }

  ${props =>
    props.isActive &&
    css`
      background: ${({ theme }) => theme.colors.mediumslateBlue};
      transform: scale(1.2);

      margin: 0 35px;
      transition: 0.3s ease-out;

      h3 {
        color: ${({ theme }) => theme.colors.white};
      }

      p {
        color: ${({ theme }) => theme.colors.white};
      }

      h2 {
        color: ${({ theme }) => theme.colors.white};
      }

      @media (max-width: 1320px) {
        transform: scale(1.05, 1);
        margin: 5px 0;
      }
    `}
`;

export const Price = styled.h2<Active>`
  margin-top: 1rem;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.gray['200']};

  ${props =>
    props.isActive &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export const TitlePlan = styled.h3`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: start;
  margin-bottom: 0.625rem;
`;

export const PlanItemsList = styled.ul<Active>`
  p {
    margin: 0;
  }
  margin-top: 2rem;

  li {
    display: flex;
    align-items: flex-start;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.5;
    justify-content: space-between;

    & + li {
      margin-top: 1rem;
    }

    span {
      margin-top: 0.2rem;
      margin-right: 0.5rem;
      > svg {
        color: ${({ theme }) => theme.colors.mediumslateBlue};
      }
    }
  }

  ${props =>
    props.isActive &&
    css`
      li {
        div {
          color: ${({ theme }) => theme.colors.white};
          span {
            svg {
              color: ${({ theme }) => theme.colors.white};
            }
          }
        }
      }
    `}
`;

export const PlanItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const PlanItemNotIncluded = styled(PlanItem)`
  gap: 8px;
  p {
    color: ${({ theme }) => theme.colors.gray['200']};
  }
`;

export const NotIncludedIcon = styled(IoCloseOutline)`
  color: ${({ theme }) => theme.colors.gray['200']};
`;

export const CurrentPlan = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
  color: #5184c8;
  background: #dbecff;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem;
  margin-bottom: 0.5rem;
  border-radius: 0.2rem;
  width: 7rem;
`;
