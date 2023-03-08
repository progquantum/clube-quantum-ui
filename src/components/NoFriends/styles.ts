import styled from 'styled-components';

import { Button } from 'components/Button';

export const Container = styled.div`
  box-shadow: 0rem 0rem 2rem rgba(41, 40, 40, 0.1);
  border-radius: 0.625rem;
  padding: 1rem 1.5rem;
  margin: 2rem auto;
  width: clamp(10rem, 100%, 44rem);
  height: max-content;
  flex: 1;
  p {
    color: ${({ theme }) => theme.colors.gray['700']};
    text-align: center;
    line-height: 1.6;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.gray['400']};
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;

  > svg {
    color: ${({ theme }) => theme.colors.gray['200']};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

export const ButtonFriends = styled(Button)`
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
