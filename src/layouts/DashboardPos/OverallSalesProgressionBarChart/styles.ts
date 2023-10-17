import styled from 'styled-components';

export const SubTitle = styled.h3`
  position: absolute;
  top: 2.3rem;
  left: 1rem;
  margin-top: 2px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  text-align: start;
  color: ${({ theme }) => theme.colors.gray[300]};
`;
