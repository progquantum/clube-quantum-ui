import styled from 'styled-components';

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Form = styled.form`
  width: 100%;
  max-width: 24.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
