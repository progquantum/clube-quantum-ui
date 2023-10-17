import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export const InputSearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.div`
  max-width: 736.06px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem auto;
`;

export const Title = styled.h4`
  margin: 2rem 6rem;
`;

export const PaginateContainer = styled.div`
  padding: 0.5rem 1.2rem;
  max-width: 20.6rem;
  margin: 0 auto;
`;
export const ClickableContainer = styled.button`
  all: unset;
  cursor: pointer;
`;

export const InvisibleContainer = styled.div<{ isRequestSelected: boolean }>`
  visibility: ${({ isRequestSelected }) =>
    isRequestSelected ? 'hidden' : 'none'};
`;
export const EmptyData = styled.h3`
  text-align: center;
  margin: 4rem 0;
`;
