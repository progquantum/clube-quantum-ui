import styled from 'styled-components';

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
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 20px;
`;

export const SubTitle = styled.h3`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin: 0.9375rem 0;
`;

export const Paragraph = styled.p`
  margin-top: -1.5rem;
`;
export const ButtonPinCode = styled.button`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray[700]};
  background-color: transparent;
  line-height: 1.6;
`;
