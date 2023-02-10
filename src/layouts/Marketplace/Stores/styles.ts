import styled from 'styled-components';

export const StoresContainer = styled.div``;

export const FilterForm = styled.form``;

export const CommerceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  row-gap: 2rem;

  @media (max-width: 1476px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
`;
