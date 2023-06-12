import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  background: ${({ theme }) => theme.colors.background};
  position: relative;

  a {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[700]};

    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 70.625rem;
  width: 100%;
  display: flex;
  padding: 0 1rem;
  height: 6.5rem;
  align-items: center;

  justify-content: space-around;
`;

export const LogoContainer = styled.div`
  width: 60px;
  height: 60px;
  @media (min-width: 601px) {
    margin-right: auto;
  }
  & img {
    cursor: pointer;
    max-width: 11.2rem;
    height: auto;
    margin: 0 2.4rem 0.4rem -0.4rem;
  }
`;
