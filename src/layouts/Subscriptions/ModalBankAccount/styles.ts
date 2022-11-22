import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* gap: 1.25rem; */
`;

export const Line = styled.span`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.7rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.gray['400']};

  > svg {
    color: ${({ theme }) => theme.colors.gray['300']};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.25rem;
`;

export const Title = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray['700']};
  font-size: 0.875rem;
`;

export const Data = styled.p`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.gray['700']};
  font-size: 0.875rem;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray['400']};
  margin: 1.25rem 0.5rem;
`;
