import styled from 'styled-components';

export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 2rem;
`;

export const ImageContainer = styled.div`
  width: 1200px;
  height: 500px;
  position: relative;

  @media (max-width: 1200px) {
    width: 1000px;
  }

  @media (max-width: 1000px) {
    width: 800px;
  }

  @media (max-width: 800px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 100vw;
    height: 450px;
  }
  @media (max-width: 500px) {
    height: 400px;
  }
  @media (max-width: 450px) {
    height: 350px;
  }
  @media (max-width: 400px) {
    height: 300px;
  }
`;
