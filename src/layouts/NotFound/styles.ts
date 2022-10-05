import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  max-width: 72.125rem;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 6.75rem;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    gap: 1.5rem;
  }
`;

export const ImageWrapper = styled.div`
  @media (max-width: 960px) {
    max-width: 340px;
    margin: 0 2rem;
  }
  @media (max-width: 400px) {
    max-width: 230px;
    margin: 0 2rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 30rem;

  h1 {
    font-weight: 800;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.gray[700]};
    letter-spacing: 2px;

    @media (max-width: 460px) {
      font-size: 2.5rem;
      margin: 0 1rem;
    }
  }

  p {
    font-weight: 600;
    text-align: center;
    font-size: 1.5rem;

    @media (max-width: 460px) {
      font-size: 1rem;
      margin: 0 1rem;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.midnightBlue};
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 24px;
    transition: color 200ms;

    &:hover {
      ${({ theme }) => css`
        color: ${lighten(0.2, theme.colors.midnightBlue)};
      `}
    }
  }
`;
