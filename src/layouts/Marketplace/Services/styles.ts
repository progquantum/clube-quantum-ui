import Link from 'next/link';
import styled from 'styled-components';

import { Container } from '../Components/ServiceCard/styles';

export const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 3rem 0;

  @media (max-width: 447px) {
    justify-content: center;
    align-items: center;
  }

  & a:nth-child(2) img {
    border-radius: 25px;
  }
`;
