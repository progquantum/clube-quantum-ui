import Image from 'next/legacy/image';
import { lighten, shade } from 'polished';
import styled, { css } from 'styled-components';

import { ContainerProps, ContentProps } from './types';

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
  position: relative;

  ${({ backgroundPosition }) => backgroundPositionStyles[backgroundPosition]}
`;

export const Content = styled.section<ContentProps>`
  ${({ windowWidth }) => css`
    background: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: min(${windowWidth}px, 100%);
    padding: 50px 0;
    position: relative;
    z-index: 2;

    .title {
      text-align: center;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.gray[700]};
    }

    .title,
    .description {
      margin-top: 24px;
    }

    .description {
      color: ${({ theme }) => theme.colors.gray[400]};
      width: 50%;
      text-align: center;

      @media (max-width: 768px) {
        width: 90%;
      }
    }

    .form {
      margin: 40px 0;
      width: 50%;
      text-align: center;

      @media (max-width: 768px) {
        width: 90%;
      }

      .form-anchor {
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

    & > .anchor,
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
  `}
`;

export const Background = styled(Image)`
  position: absolute;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
  text-transform: uppercase;
  background: linear-gradient(262deg, #190252 -13.86%, #001454 149.18%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
