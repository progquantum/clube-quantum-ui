import styled from 'styled-components';

export const Container = styled.main`
  max-width: 72.125rem;
  width: 100%;
  margin: 2rem auto;
  gap: 3.125rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
  width: 100%;
  max-width: 736.06px;

  @media (max-width: 460px) {
    align-items: center;
  }
`;
