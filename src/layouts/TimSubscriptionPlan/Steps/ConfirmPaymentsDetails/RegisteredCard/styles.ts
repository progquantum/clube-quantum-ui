import styled from 'styled-components';

export const InputCVV = styled.input`
  width: 100px;
  padding: 0.5rem 0;
  border: 2px solid ${({ theme }) => theme.colors.gray[700]};
  padding-left: 1rem;
  border-radius: 0.625rem;
`;
