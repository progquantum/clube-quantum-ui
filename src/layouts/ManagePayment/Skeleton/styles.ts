import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export const Container = styled(Skeleton)`
  width: 21.844rem;
  height: 13.625rem;
  border-radius: 0.9rem;

  @media (max-width: 1024px) {
    width: 26.688rem;
  }

  @media (max-width: 460px) {
    width: 20.665rem;
  }
`;
