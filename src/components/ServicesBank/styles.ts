import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
  width: 100%;
  column-gap: 1rem;
  row-gap: 1rem;

  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ButtonItem = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 0.6rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0rem 0rem 1rem rgba(41, 40, 40, 0.1);
  border-radius: 0.625rem;
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 4.5rem;
  padding: 0.5rem 0.5rem;

  > svg {
    color: ${({ theme }) => theme.colors.mediumslateBlue};
    font-size: 1.8rem;
    background-color: ${({ theme }) => theme.colors.ghostwhite};
    padding: 4px;
    border-radius: 50%;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[400]};
    cursor: not-allowed;
  }
  &:disabled svg {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const Text = styled.p`
  font-size: 0.8rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray['400']};
`;
