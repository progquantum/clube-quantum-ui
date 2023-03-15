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

export const MyContractsContainer = styled.div`
  margin: 2rem 1rem;
  width: 100%;
  & > div:nth-child(2) {
    max-width: 736.06px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const FallbackComponent = styled(MyContractsContainer)`
  border-radius: 0.9rem;
  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  height: max-content;

  & div:first-child {
    align-self: flex-start;
    color: ${({ theme }) => theme.colors.gray['400']};
    & svg {
      margin-right: 1rem;
    }
  }
  & p {
    font-size: 1.4rem;
    text-align: center;
    width: 60%;
  }
`;
