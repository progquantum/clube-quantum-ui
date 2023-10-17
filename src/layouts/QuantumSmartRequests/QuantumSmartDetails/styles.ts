import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px -2px 20px 0px rgba(0, 0, 0, 0.07);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.1s ease;
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.ghostwhite};
  }
`;

export const Title = styled.h4``;

export const Name = styled.h5`
  background: ${({ theme }) => theme.gradients.mediumsLateBlueToMidnightBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContractId = styled.div`
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const Field = styled.div`
  display: flex;
  gap: 1rem;
  & > span:first-of-type {
    font-weight: 700;
  }
`;
