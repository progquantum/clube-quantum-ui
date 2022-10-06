import styled, { css } from 'styled-components';
import { lighten, shade } from 'polished';

import { BackgroundProps, ContainerProps } from './types';

const backgroundPositionStyles = {
  left: css`
    flex-direction: row;
  `,
  right: css`
    flex-direction: row-reverse;
  `,
};

export const Container = styled.div<ContainerProps>`
  min-height: 100vh;
  display: flex;
  align-items: stretch;

  ${({ backgroundPosition }) => backgroundPositionStyles[backgroundPosition]}
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(800px, 100%);
  padding: 50px 0;

  > div:first-of-type {
    flex: 0;
  }

  h1 {
    text-align: center;
    font-size: 1.5rem;
  }

  h1,
  p {
    margin-top: 24px;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  p {
    margin: 40px 0;
    width: 50%;
    text-align: center;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  form {
    margin: 40px 0;
    width: 50%;
    text-align: center;

    h1 {
      text-align: center;

      margin-bottom: 24px;
    }

    @media (max-width: 768px) {
      width: 90%;
    }

    a {
      color: ${({ theme }) => theme.colors.gray[700]};
      display: block;
      margin-top: 24px;
      transition: color 200ms;

      &:hover {
        ${({ theme }) => css`
          color: ${lighten(0.2, theme.colors.gray[700])};
        `}
      }
    }
  }

  & > button {
    background: none;
  }

  & > a,
  & > button {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.midnightBlue};
    transition: color 200ms;

    svg {
      margin-right: 14px;
    }

    &:hover {
      ${({ theme }) => css`
        color: ${shade(0.1, theme.colors.midnightBlue)};
      `}
    }
  }
`;

export const Background = styled.div<BackgroundProps>`
  flex: 1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    background-color: ${({ theme }) => theme.colors.royalblue};
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.3;
    z-index: -1;
  }

  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url(${backgroundImage});
    `}

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerImage = styled.div`
  cursor: pointer;
`;
