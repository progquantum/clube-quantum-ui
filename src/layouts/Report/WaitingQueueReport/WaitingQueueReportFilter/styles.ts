import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  gap: 2rem;
  flex-wrap: wrap;

  & input {
    max-width: 400px;
    max-height: 50px;
  }
`;

export const InputContainer = styled.div`
  max-width: 350px;
  margin: 0.5rem;
  @media (max-width: 385px) {
    max-width: 100%;
  }

  & input + button {
    border-radius: 0;
    width: 50px;
  }
`;

export const DatePickerContainer = styled.div`
  gap: 0.5 rem;
  display: flex;
  flex-shrink: 1;
  flex-wrap: wrap;
  & > div {
    max-width: 250px;
    width: 100%;
    flex: 1 1 150px;
    margin: 0.5rem;
  }
`;
