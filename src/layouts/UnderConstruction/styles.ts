import styled from 'styled-components';

export const Container = styled.div`
  max-width: 72.125rem;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  text-align: center;

  h2 {
    font-size: 2.3rem;

    @media (max-width: 650px) {
      font-size: 1.8rem;
    }

    @media (max-width: 400px) {
      font-size: 1.3rem;
    }
  }

  p {
    font-size: 1.2rem;

    color: ${({ theme }) => theme.colors.gray['400']};
    margin-bottom: 1rem;

    @media (max-width: 650px) {
      font-size: 1rem;
    }

    @media (max-width: 400px) {
      font-size: 0.9rem;
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.mediumslateBlue};

    &:hover {
      color: ${({ theme }) => theme.colors.gray['400']};
    }

    @media (max-width: 650px) {
      font-size: 1rem;
    }

    @media (max-width: 400px) {
      font-size: 0.9rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  @media (max-width: 960px) {
    max-width: 400px;
    margin: 0 1rem;
  }

  @media (max-width: 400px) {
    max-width: 300px;
  }
`;
