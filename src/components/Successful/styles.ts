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
`;

export const ImageContainer = styled.div`
  @media (max-width: 940px) {
    display: none !important;
  }
`;

export const TextTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  margin: 3.75rem 0;
`;

export const Message = styled.div`
  color: ${({ theme }) => theme.colors.gray[700]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30rem;
`;

export const Achor = styled.a`
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
`;

export const Paragraph = styled.p`
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 1rem;
`;
