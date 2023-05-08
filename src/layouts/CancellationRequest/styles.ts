import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RequestsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  max-width: 736.06px;

  & .paginationContainer {
    margin: 0 auto;
  }
`;

export const Title = styled.h4`
  width: 100%;
  margin: 2rem 0;
`;

export const ClickableContainer = styled.div`
  all: unset;
  display: block;
  width: 100%;
  max-width: 736.06px;
`;
