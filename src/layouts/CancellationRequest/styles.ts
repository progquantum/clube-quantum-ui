import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const RequestsContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  width: 100%;
  padding-left: 8rem;
`;

export const PaginationContainer = styled.div`
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.06);
  border-radius: 0.625rem;
  border: 1px solid red;
  padding: 1rem;
`;

export const ClickableContainer = styled.div`
  all: unset;
  width: 100%;
`;
