import styled, { css } from 'styled-components';

import { showAnswer } from './types';

export const Container = styled.div`
  max-width: 72.125rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 5rem;

  h1 {
    margin: 0 1rem;
  }

  p {
    margin: 1rem;
    color: ${({ theme }) => theme.colors.gray['400']};
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3.5rem 1rem;
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.375rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.ghostwhite};
  border-radius: 0.5rem;

  h3 {
    font-size: 1rem;
    line-height: 1.6;
  }

  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.mediumslateBlue};
  }

  @media (max-width: 600px) {
    height: fit-content;

    h3 {
      max-width: 22ch;
    }
  }
`;

export const Answer = styled.p<showAnswer>`
  font-size: 0.9rem;
  line-height: 1.6;
  display: none;
  animation: anime 0.5s forwards;

  ${props =>
    props.isShow &&
    css`
      display: block;
    `}

  @keyframes anime {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Suport = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.ghostwhite};
  margin-bottom: 5rem;

  @media (max-width: 600px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const SuportTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  h2 {
    font-size: 1.3rem;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.6;

    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
`;

export const Chat = styled.div`
  background-color: white;
  padding: 1.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    color: ${({ theme }) => theme.colors.mediumslateBlue};
  }
`;

export const SuportButton = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.mediumslateBlue};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.royalblue};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
