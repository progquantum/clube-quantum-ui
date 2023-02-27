import styled from 'styled-components';

export const PinCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
  max-width: 30rem;
`;

export const PinCodeText = styled.p``;

export const PinCodeGrid = styled.p`
  display: flex;
  gap: 1rem;
`;

export const PinCodeCell = styled.input`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.6rem;
  padding: 0.7rem;
  border: 2px solid ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const PinCodeNotReceived = styled.h3``;

export const PinCodeSpan = styled.span``;

export const Bold = styled.span`
  font-weight: 700;
`;
