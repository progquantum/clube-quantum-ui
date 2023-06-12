import styled from 'styled-components';

export const UploadPhotoBox = styled.div`
  width: 354px;
  display: flex;
  padding: 0px 0px 10px;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-top: 25px;
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

  & .edit {
    position: absolute;
    top: 5px;
    left: 60px;
    cursor: pointer;

    & svg {
      color: ${({ theme }) => theme.colors.black};
      cursor: pointer;
      &:hover {
        border: 2px solid black;
        border-radius: 20px;
        font-size: 5px;
      }
    }
  }

  @media (max-width: 374px) {
    width: 310px;
  }
`;

export const FileInputWrapper = styled.div`
  position: relative;
`;

export const FileInputButton = styled.label`
  width: 135px;
  height: 26px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 12px;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 12px;
  margin-bottom: 16px;
`;

export const ActualFileInput = styled.input`
  display: none;
`;
