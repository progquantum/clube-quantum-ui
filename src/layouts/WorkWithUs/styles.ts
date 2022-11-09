import styled from 'styled-components';

export const Container = styled.div`
  max-width: 72.125rem;
  margin: 10rem auto;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    max-width: 54rem;
  }
`;

export const ContentWrapper = styled.div`
  &:first-of-type {
    flex: 0.89;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 860px) {
      align-items: center;
    }
  }
  &:last-of-type {
    flex: 0.8;
    @media (max-width: 860px) {
      display: none;
    }
  }
  & button {
    width: 70%;
  }
`;

export const Heading = styled.h2`
  width: 75%;
  font-weight: 900;
  text-align: left;
`;

export const ContentText = styled.p`
  width: 70%;
  margin-top: 2.2rem;
  margin-bottom: 4rem;
  font-size: 1.2rem;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }
  @media (max-width: 860px) {
    margin-top: 1.3rem;
  }
`;
