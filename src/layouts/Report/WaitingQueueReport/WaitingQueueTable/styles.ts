import styled from 'styled-components';

export const Table = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  min-width: 650px;
`;

export const TableHeader = styled.div``;

export const TableLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.7rem;
  border-bottom: 1px solid #c4c4c4;
`;

export const Label = styled.div`
  flex: 1;
  text-align: left;
  width: max-content;
  margin-right: 0.5rem;
  font-weight: 700;
`;

export const Content = styled.div`
  flex: 1;
  padding: 1rem 0;
  margin-right: 0.5rem;
`;

export const ContentContainer = styled.div``;

export const ContentRow = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;
export const ScrollableContainer = styled.div`
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const PaginationContainer = styled.div`
  margin: 2rem auto 1rem;
  width: 250px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NoDataAvailable = styled.div`
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem 0 0;
  width: 100%;
`;
