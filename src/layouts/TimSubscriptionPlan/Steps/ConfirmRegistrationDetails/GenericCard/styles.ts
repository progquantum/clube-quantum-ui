import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  max-width: 25.26rem;
  width: 100%;
  height: max-content;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  box-shadow: 0 0 1.3rem rgba(0, 0, 0, 0.1);
  border-radius: 0.9rem;

  & div:first-child {
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
