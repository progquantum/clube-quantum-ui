import styled, { keyframes } from 'styled-components';

const show = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  z-index: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${show} 1s ease-in forwards;
`;

export const Animation = styled.object`
  width: 100%;
  height: 100%;
`;
