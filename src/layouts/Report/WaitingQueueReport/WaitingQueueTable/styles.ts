import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  min-width: 650px;
`;

export const TableLabelContainer = styled.tr`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.7rem;
  border-bottom: 1px solid #c4c4c4;
`;

export const Label = styled.th`
  flex: 1;
  text-align: left;
  width: max-content;
  margin-right: 0.5rem;
`;

export const Content = styled.tr`
  flex: 1;
  padding: 1rem 0;
  margin-right: 0.5rem;
`;

export const ContentContainer = styled.tbody`
  display: flex;
  justify-content: space-between;
`;

export const CheckboxLabel = styled.label`
  margin-left: 0.7rem;
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
