import Link from 'next/link';
import styled from 'styled-components';

export const MarketplaceLink = styled(Link)`
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  width: max-content;
  margin: 0 0.5rem;
  border-radius: 0.5rem;
  display: block;
  padding: 0.7rem 1.2rem;
  & > span {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;
