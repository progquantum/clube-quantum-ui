import styled from 'styled-components';

export const Container = styled.div`
  max-width: 19.6875rem;
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  color: ${({ theme }) => theme.colors.gray[700]};
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.gray[700]};
`;
export const SubTitle = styled.h3`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0.9375rem;
`;

export const Paragraph = styled.p`
  margin-top: -1.5rem;

  span {
    background-color: transparent;
    font-size: 0.875rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.section`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  button:last-of-type {
    margin: 0;
  }
`;
