import styled from 'styled-components';

export const StoresContainer = styled.div``;

export const FilterForm = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 738px) {
    width: 100%;
  }
`;

export const CommerceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
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

export const InlineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  @media (max-width: 738px) {
    justify-content: flex-end;
  }
`;

export const MapButton = styled.button`
  all: unset;
  height: 100%;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.gradients.mediumsLateBlueToMidnightBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.8rem 2.2rem;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  }
`;

export const LoadingContainer = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.midnightBlue};
  margin: 2rem auto;
  text-align: center;
`;
