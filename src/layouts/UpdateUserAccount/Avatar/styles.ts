import styled from 'styled-components';

import { Button } from 'components/Button';

export const Container = styled.div`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0.25rem 1.25rem 1.5rem;
  width: 22rem;

  @media (max-width: 380px) {
    width: 19rem;
  }
`;

export const EditAvatar = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: ${({ theme }) => theme.colors.mediumslateBlue};
    transition: none;
  }

  h2 {
    font-weight: 500;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;
