import styled, { css } from 'styled-components';

export const ContainerIcon = styled.button`
  width: 106.82px;
  height: 51px;
  background: ${({ theme }) => theme.colors.mediumslateBlue};
  border-radius: 0px 50px 50px 50px;
  right: 0%;
  top: 0%;
  bottom: 0%;

  @media (max-width: 340px) {
    width: 80px;
  }
  @media (max-width: 300px) {
    width: 60px;
  }
`;

const variants = {
  default: css`
    border-radius: 0px 50px 50px 50px;
    & > ${ContainerIcon} {
      & > svg {
        color: ${({ theme }) => theme.colors.background};
      }
    }
  `,
  secondary: css`
    border-radius: 8px;
    & > ${ContainerIcon} {
      background: initial;
      & > svg {
        color: ${({ theme }) => theme.colors.midnightBlue};
      }
    }
  `,
};

export const ContainerInput = styled.div<{ variant: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.input.text};
  border-radius: 3.125rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  width: 100%;
  max-width: 736.06px;
  transition: all 100ms;
  padding-left: 1rem;
  div > svg {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.input.icon};
    right: 0;
  }

  ${({ variant }) => variants[variant]}
`;

export const InputSearch = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  height: 100%;
  width: 100%;
  padding: 1rem 0;
`;
