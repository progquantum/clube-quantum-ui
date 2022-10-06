import styled from 'styled-components';

export const Terms = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-block: 24px !important;
`;

export const CheckBox = styled.input`
  width: 20px;
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.8rem;
  display: block;
  margin-left: 25px;
  text-align: start;
`;

export const TextTerm = styled.span`
  font-weight: 500;
  font-size: 12px;
  text-align: start;
`;
