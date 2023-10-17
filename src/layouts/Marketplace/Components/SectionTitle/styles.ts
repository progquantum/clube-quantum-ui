import styled from 'styled-components';

export const Title = styled.span`
  display: block;
  width: 90%;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  line-height: 150%;
`;
