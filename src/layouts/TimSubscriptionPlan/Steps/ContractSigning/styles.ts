import styled from 'styled-components';

export const ContractSigningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const ShowContractBtn = styled.button`
  padding: 1rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`;

export const ContractFile = styled.div`
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray[700]};
  border-top: 2px solid ${({ theme }) => theme.colors.gray[700]};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[700]};
`;

export const ContractorName = styled.div`
  font-size: 1.5rem;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const ContractStatus = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`;
