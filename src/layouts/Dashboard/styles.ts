import styled from 'styled-components';

export const Container = styled.main`
  max-width: 72.125rem;
  width: 100%;
  margin: 5rem auto;
  gap: 3.125rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 414px) {
    align-items: center;
  }
`;
