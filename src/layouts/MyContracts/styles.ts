import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.input.text};
  border-radius: 3.125rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  width: 100%;
  max-width: 736.06px;
  padding-left: 30px;
  transition: all 100ms;

  div > svg {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.input.icon};
    margin-right: 44.15px;
    right: 0;
  }
`;

export const ContainerIcon = styled.button`
  width: 106.82px;
  height: 51px;
  background: ${({ theme }) => theme.colors.mediumslateBlue};
  border-radius: 0px 50px 50px 50px;
  left: 86.14%;
  right: 0%;
  top: 0%;
  bottom: 0%;
`;

export const InputSearch = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  height: 100%;
  width: 100%;
  padding: 1rem 0;
`;
