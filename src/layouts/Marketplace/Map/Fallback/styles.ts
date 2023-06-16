import styled from 'styled-components';

export const FallbackContainer = styled.div`
  margin: 5rem 0;
  border-radius: 0.9rem;
  position: relative;
  & img {
    filter: blur(0.6rem);
  }
`;

export const Text = styled.h4`
  width: 50%;
  text-align: center;
  font-size: 1rem;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
