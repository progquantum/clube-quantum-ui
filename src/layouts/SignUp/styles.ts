import styled from 'styled-components';

import { Button } from 'components/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 3.75rem;
`;

export const ContainerImage = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 3.563rem;
  max-width: 21.875rem;
`;

export const LinkButton = styled(Button)`
  width: 100%;
  margin-bottom: 0.938rem;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.625rem 1.813rem;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  margin-bottom: 1.313rem;
  font-weight: 900;
`;

export const Paragraph = styled.p`
  margin-bottom: 3.75rem;
  font-weight: 500;
  font-size: 1.125rem;
`;
