import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const JumpStepButton = styled.button`
  text-align: center;
  cursor: pointer;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.gray[700]} !important;

  transition: color 200ms;

  &:hover {
    ${({ theme }) => css`
      color: ${lighten(0.2, theme.colors.gray[700])};
    `}
  }
`;
