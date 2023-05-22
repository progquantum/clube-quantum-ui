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
  width: 14.5625rem;
  display: flex;
  padding: 0px 0px 10px;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-top: 2rem;
  background: ${({ theme }) => theme.colors.ghostwhite};
  & svg {
    color: ${({ theme }) => theme.colors.danger};
    position: absolute;
    top: 10px;
    right: 22px;
    cursor: pointer;
    &:hover {
      border: 2px solid red;
      border-radius: 20px;
      font-size: 5px;
    }
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
export const FileInputWrapper = styled.div`
  position: relative;
`;

export const FileInputButton = styled.span`
  width: 209px;
  justify-content: center;
  display: flex;
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  padding: 0.8rem 1rem;
  margin-top: 0.5rem;
  border-radius: 0.7rem;
  cursor: pointer;
  margin-top: 12px;
`;

export const ActualFileInput = styled.input`
  display: none;
`;
