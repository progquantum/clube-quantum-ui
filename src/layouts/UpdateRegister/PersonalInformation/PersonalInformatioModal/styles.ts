import styled from 'styled-components';

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TextContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  & p {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const PersonalInformationForm = styled.form`
  display: flex;
  flex-direction: column;
`;
