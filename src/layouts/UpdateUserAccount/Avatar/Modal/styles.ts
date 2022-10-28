import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  margin: 0 auto;
  max-width: 22rem;

  h3 {
    font-size: 1.125rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.gray[400]};
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.7rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.gray[400]};
    text-align: center;
  }
`;

export const UploadButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.mediumslateBlue};
  border-radius: 10px;
  height: 56px;
  width: 100%;
  padding: 0 16px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.mediumslateBlue};
  gap: 0.6rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.mediumslateBlue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const InputFile = styled.input`
  display: none;
`;

export const AvatarForm = styled.form`
  width: 100%;
  margin-bottom: 2rem;
`;
