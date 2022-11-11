import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100vh;
  max-width: 72.125rem;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
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

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.gray['400']};
    text-align: center;

    @media (max-width: 650px) {
      font-size: 1.8rem;
    }

    @media (max-width: 400px) {
      font-size: 1.3rem;
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
