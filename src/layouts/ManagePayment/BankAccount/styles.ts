import styled from 'styled-components';

export const Content = styled.div`
  box-shadow: 0px 0px 20px 0px #0000001a;
  width: 22rem;
  height: 27.9481rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  gap: 10px;
  flex-direction: column;
  border-radius: 0.9rem;
  & button {
    margin: 0;
    padding: 1.3rem 0;
  }

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

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.royalPurple};
  padding: 6px;
`;

export const ContentTitle = styled.h2`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.royalPurple};
  font-weight: 600;
  line-height: 1.5rem;
`;

export const YourAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  > svg {
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const BankingData = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BankingAccount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const TitleContent = styled.strong`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: 0.9rem;

  @media (max-width: 460px) {
    font-size: 0.8rem;
  }
`;

export const TitleApp = styled.strong`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 0.9rem;
  font-weight: 700;

  @media (max-width: 460px) {
    font-size: 0.8rem;
  }
`;
export const TextContent = styled.p`
  color: ${({ theme }) => theme.colors.gray[400]};
  font-weight: 500;
  font-size: 0.9rem;

  @media (max-width: 460px) {
    font-size: 0.8rem;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray[400]};
  font-weight: 500;
  font-size: 0.9rem;
  margin: 0.69rem 0;

  @media (max-width: 460px) {
    font-size: 0.8rem;
  }
`;

export const BankingOwner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  a {
    @media (max-width: 460px) {
      font-size: 0.7rem;
    }
  }
`;
