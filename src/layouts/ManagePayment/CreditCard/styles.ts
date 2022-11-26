import styled from 'styled-components';

export const Content = styled.div`
  box-shadow: 0px 0px 20px 0px #0000001a;
  width: 22rem;
  height: 13.625rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 0.9rem;

  @media (max-width: 1024px) {
    width: 26.688rem;
  }

  @media (max-width: 460px) {
    width: 20.665rem;
  }

  @media (max-width: 380px) {
    width: 19rem;
  }
`;

export const ContentTitle = styled.h2`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[400]};
  font-weight: 500;
  line-height: 1.25rem;
`;

export const YourAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  > svg {
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardNumber = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin: 0.115rem 0;
`;

export const LastDigits = styled.strong`
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const TextContent = styled.p`
  color: ${({ theme }) => theme.colors.gray[400]};
  font-weight: 500;
  line-height: 20px;
  font-size: 0.9rem;

  @media (max-width: 460px) {
    font-size: 0.8rem;
  }
`;
