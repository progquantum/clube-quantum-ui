import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 22rem;
  border-radius: 0.9rem;
  padding: 1rem;
  position: fixed;
  top: 2rem;
  right: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  align-self: flex-start;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const Message = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 1rem 0;
  background-image: ${({ theme }) => theme.gradients.lightgreenToGreen};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Button = styled.button`
  margin: 1rem 0;
  width: 100%;
  padding: 0.8rem 0;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.midnightBlue};
  color: ${({ theme }) => theme.colors.midnightBlue};
  transition: all 0.1s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.midnightBlue};
    color: ${({ theme }) => theme.colors.white};
  }
`;
