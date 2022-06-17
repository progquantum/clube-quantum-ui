import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  right: 0;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
  `

export const MessageError = styled.span`
  min-width: 200px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px;
  border-radius: 6px;

  color: ${({ theme }) => theme.colors.gray[400]};
  text-align: center;
  font-weight: 600;

  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 35px;
  right: 50%;

  transform: translateX(50%);
  transition: opacity 200ms;
  filter: brightness(90%);

  &:before {
    content: '';
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.light} transparent;
    border-width: 6px 6px 0 6px;
    position: absolute;
    top: 100%;
    right: 50%;
    transform: translateX(50%);
  }
`
