import styled, { css } from 'styled-components';

export const PlanSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  & > div {
    display: flex;
    gap: 2rem;
    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 3rem;
    }
  }
`;

export const ButtonContinue = styled.button`
  padding: 0.7rem 1.4rem;
  background-color: ${({ theme }) => theme.colors.midnightBlue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.6rem;
  transition: background-color 0.1s ease;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.gray[100]};
      color: ${({ theme }) => theme.colors.gray[400]};
      cursor: not-allowed;
      pointer-events: none;
  }
`}
  &:hover {
    background-color: ${({ theme }) => theme.colors.royalblue};
  }
`;
