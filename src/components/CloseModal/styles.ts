import styled from 'styled-components';

export const CloseModal = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  border-radius: 0.625rem;
  padding: 1rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.gray[400]};
  display: flex;
  align-items: center;
  transition: 0.2s all;

  &:hover {
    color: ${({ theme }) => theme.colors.danger};
  }
`;
