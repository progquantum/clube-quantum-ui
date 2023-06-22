import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0rem 0rem 1.25rem rgba(0, 0, 0, 0.1);
  border-radius: 0.625rem;
  height: 9.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1.5rem;
  flex-grow: 1;

  @media (max-width: 1000px) {
    padding: 1.2rem;
  }
  @media (max-width: 650px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0.5rem 0;
`;

export const ContentHeader = styled.div`
  display: flex;
  gap: 0.325rem;
  align-items: center;
  justify-content: center;
`;

export const AccountBalanceButton = styled.button`
  background: none;
  border: none;
`;

export const Title = styled.p`
  font-size: 0.8rem;
  text-justify: left;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.gray[400]};

  @media (max-width: 450px) {
    font-size: 0.7rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`;

export const TextValue = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.375rem;
`;

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  color: ${({ theme }) => theme.colors.gray[300]};
`;
