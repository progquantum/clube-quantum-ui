import styled from 'styled-components';

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.5rem;

  & p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  > svg {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const AddressWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;
