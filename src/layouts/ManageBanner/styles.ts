import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem auto;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 2rem;
`;

export const UploadPhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;

  & > button:first-of-type {
    border: none;
    font-weight: 700;
  }

  & > button:last-of-type {
    background-color: ${({ theme }) => theme.colors.midnightBlue};
  }

  & > button {
    max-width: 8.5rem;
  }
`;
