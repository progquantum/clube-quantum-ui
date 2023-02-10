import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`;

export const Wrapper = styled.div`
  max-width: 70.625rem;
  padding: 0 1rem;
  width: 100%;
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
`;

export const LeftNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > svg {
    cursor: pointer;
    max-width: 11.2rem;
    height: auto;
    margin: 0 2.4rem 0.4rem -0.4rem;
  }
`;

export const RightNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  @media (max-width: 470px) {
    > button {
      display: none;
    }
  }
`;
