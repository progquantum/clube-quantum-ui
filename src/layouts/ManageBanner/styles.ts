import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem auto;
  width: 70%;
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

export const UploadPhotoBox = styled.div`
  width: 19rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-top: 2rem;
  & svg {
    color: ${({ theme }) => theme.colors.danger};
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
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

export const FileInput = styled.input`
  color: transparent;
  width: 100%;
  &::-webkit-file-upload-button {
    width: inherit;
    background: ${({ theme }) => theme.gradients.mediumsLateBlueToMidnightBlue};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    padding: 0.8rem 0;
    margin-top: 0.5rem;
    border-radius: 0.7rem;
    border: none;
    cursor: pointer;
  }
`;
