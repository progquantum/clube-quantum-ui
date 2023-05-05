import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 8rem;
  box-shadow: 0px 0px 0.4rem rgba(0, 0, 0, 0.2);
  border-radius: 0.9rem;
  padding: 1.7rem;

  & > p:first-of-type {
    margin: 2rem 0;
  }

  & > p:last-of-type {
    color: ${({ theme }) => theme.colors.gray[400]};
    margin: 1rem 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  & > svg {
    cursor: pointer;
  }
`;

export const Title = styled.h5``;

export const ContractName = styled.h3`
  margin: 1.5rem 0 0.5rem;
  background-image: ${({ theme }) =>
    theme.gradients.mediumsLateBlueToMidnightBlue};
  background-clip: text
  text-fill-color: transparent
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
`;

export const DocumentKey = styled.span`
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 0.9rem;
  display: block;
  margin: 0.135rem 0;
`;

export const DataRow = styled.span`
  display: block;
  margin: 0.7rem 0;
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const TextAreaReport = styled.textarea`
  resize: none;
  width: 100%;
  margin: 1rem 0;
  border: 2px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: 0.6rem;
  padding: 0.5rem;
`;
