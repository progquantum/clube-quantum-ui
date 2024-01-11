import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1.5rem;
  border-radius: 0.9rem;
  box-shadow: 0px 0px 42px 0px #00000021;
  background-color: ${({ theme }) => theme.colors.white};
  & > div > span {
    display: block;
    color: ${({ theme }) => theme.colors.gray[300]};
    max-width: 500px;
  }
`;

export const Title = styled.h5`
  color: ${({ theme }) => theme.colors.gray[700]};
`;
