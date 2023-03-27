import styled from 'styled-components';

import { Props } from './types';

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ height }) => height || '150px'};
  height: ${({ height }) => height || '150px'};
  padding: 21px;
  box-shadow: 0px 0.1rem 1.25rem rgba(0, 0, 0, 0.07);
  border-radius: 25px;
  text-align: center;
  cursor: pointer;
`;
