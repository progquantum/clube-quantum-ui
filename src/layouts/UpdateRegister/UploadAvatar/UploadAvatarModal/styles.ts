import styled from 'styled-components';

import { Button } from 'components/Button';

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
    margin-bottom: 2rem;
    margin-top: 1rem;
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

export const CancelButton = styled(Button)`
  width: 100%;
  background: ${({ theme }) => theme.colors.danger};
  border: 2px solid ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.danger};
    background: transparent;
  }
`;

export const InputFile = styled.input`
  display: none;
`;

export const ImagePrev = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const AvatarForm = styled.form`
  width: 100%;
`;
