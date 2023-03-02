import styled from 'styled-components';

import { Button } from 'components/Button';

export const Container = styled.main`
  max-width: 72.125rem;
  min-height: 800px;
  width: 100%;
  margin: 5rem auto;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const Heading = styled.h1`
  font-weight: 900;
  font-size: 2rem;
  line-height: 1.4;
  margin-bottom: 2rem;

  @media (max-width: 414px) {
    font-size: 1.5rem;
  }
`;

export const Content = styled.p`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5;
  max-width: 31rem;
  margin-bottom: 2.5rem;

  @media (max-width: 414px) {
    font-size: 1rem;
  }
`;

export const InviteCodeContainer = styled(Button)`
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 28rem;
  padding: 2.5rem 1rem;
  text-align: start;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.midnightBlue};
  border: 2px solid ${({ theme }) => theme.colors.midnightBlue};
  border-radius: 0.625rem;

  * {
    transition: none;
  }

  strong {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.midnightBlue};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 414px) {
    font-size: 0.9rem;
  }
`;

export const ImageDiv = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 28rem;
`;

export const ButtonPlan = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeadingInfo = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 2.5rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 2.5rem;
`;
