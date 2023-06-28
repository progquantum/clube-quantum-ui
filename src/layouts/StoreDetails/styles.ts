import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 320px;
  margin-top: 2rem;
  margin-bottom: 48px;
  position: relative;
  @media (max-width: 600px) {
    margin-top: 0px;
    height: 196px;
  }

  & > img {
    object-fit: cover;
    border-radius: 0.3rem;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  text-align: center;
  min-height: 100vh;
  padding-top: 10rem;
`;
