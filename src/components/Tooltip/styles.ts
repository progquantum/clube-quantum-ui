import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  align-items: center;

  &:hover {
    span {
      opacity: 1;
      visibility: visible;
    }
  }

  svg {
    cursor: pointer;
    height: 20px;
  }
`;

export const Content = styled.span`
  background: ${({ theme }) => theme.colors.input.danger};
  bottom: 50px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0;
  padding: 8px;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  min-width: 100px;
  transition: opacity 200ms;
  visibility: hidden;

  &:before {
    content: '';
    border-style: solid;
    border-width: 6px 6px 0 6px;
    border-color: ${({ theme }) => theme.colors.input.danger} transparent;
    position: absolute;
    top: 100%;
    right: 50%;
    transform: translateX(50%);
  }
`;
