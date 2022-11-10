import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56vh;
  max-width: 72.125rem;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
  &:first-of-type {
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  &:last-of-type {
    @media (max-width: 960px) {
      display: none;
    }
  }
`;

export const Heading = styled.h2`
  max-width: 26ch;
  font-weight: bold;
  line-height: 1.6;
`;

export const ContentText = styled.p`
  max-width: 33ch;
  line-height: 1.6;
  margin-top: 2.2rem;
  margin-bottom: 4rem;
  font-size: 1.2rem;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }
  @media (max-width: 860px) {
    margin-top: 1.3rem;
  }
`;
