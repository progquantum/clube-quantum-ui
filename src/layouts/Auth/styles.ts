import styled, { css } from 'styled-components';
import { lighten, shade } from 'polished';
import Image from 'next/legacy/image';

import { ContainerProps } from './types';

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

export const Content = styled.section`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(800px, 100%);
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
`;

export const Background = styled(Image)`
  position: absolute;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;
