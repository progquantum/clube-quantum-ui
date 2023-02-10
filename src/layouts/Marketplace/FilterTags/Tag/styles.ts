import styled from 'styled-components';

export const TagContainer = styled.div`
  width: max-content;
  text-align: center;
  padding: 0.5rem 2rem;
  box-shadow: 6px 6px 4px -4px rgba(0, 0, 0, 0.25);
  border-radius: 2.5rem;
  color: ${({ theme }) => theme.colors.midnightBlue};
`;
