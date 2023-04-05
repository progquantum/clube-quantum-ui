import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AnimatedContainer = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 99999;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  max-width: 50rem;
  height: max-content;
  margin: auto auto;
  padding: 2rem;
  border-radius: 1rem;

  @media (max-width: 500px) {
    margin-bottom: 0;
    border-radius: 1rem 1rem 0 0;
    cursor: grab;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  border-radius: 0.625rem;
  padding: 1rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.gray[400]};
  display: flex;
  align-items: center;
  transition: 0.2s all;

  &:hover {
    color: ${({ theme }) => theme.colors.danger};
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Drag = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: block;
    width: 3rem;
    height: 0.25rem;
    position: absolute;
    top: 10px;
    right: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.gray[200]};
    border-radius: 4px;
    border: none;
    margin: 0 auto;
  }
`;

export const AnimatedModalOverlay = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5;
`;
