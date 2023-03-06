import styled from 'styled-components';

import Link from 'next/link';

export const MarketplaceLink = styled(Link)`
  background: ${({ theme }) => theme.gradients.mediumsLateBlueToMidnightBlue};
  padding: 0.9rem 0;
  width: 100%;
  max-width: 13.75rem;
  text-align: center;
  margin: 0 1rem;
  border-radius: 0.5rem;
  & span {
    font-size: clamp(0.5rem, 1rem, 1rem);
    color: ${({ theme }) => theme.colors.white};
  }
`;
