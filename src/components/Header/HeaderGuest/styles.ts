import styled from 'styled-components';

import { Button } from 'components/Button';

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  max-width: 673px;
  align-items: center;
  gap: 3rem;

  @media (max-width: 850px) {
    gap: 1rem;
    justify-content: flex-end;
  }
`;

export const LoginButton = styled(Button)`
  max-width: 155px;
  max-height: 45px;
  margin: 0;
`;

export const BoxContainer = styled.div`
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.07);
`;
