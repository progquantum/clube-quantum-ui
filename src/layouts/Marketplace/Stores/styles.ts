import styled, { keyframes } from 'styled-components';

import { CardContainer } from './InlineCard/styles';

const entry = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(-3rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

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
  animation: ${entry} 0.2s ease;
  text-align: center;
`;

export const SearchResultsContainer = styled.div`
  margin: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & ${CardContainer} {
    justify-content: flex-start;
  }
  & > p {
    color: ${({ theme }) => theme.colors.gray[400]};
    margin: 2rem 0;
  }
`;

export const FallbackEstablishmentText = styled.h3`
  text-align: center;
  margin: 4rem auto;
  animation: ${entry} 0.2s ease;
  grid-area: 1 / 1 / -1 / -1;
  color: ${({ theme }) => theme.colors.midnightBlue};
`;
