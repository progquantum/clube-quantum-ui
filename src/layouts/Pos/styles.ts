import styled from 'styled-components';

export const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60vw;
  margin: 40px auto;

  @media (max-width: 1250px) {
    width: 75vw;
  }

  @media (max-width: 600px) {
    width: 95vw;
  }
`;
