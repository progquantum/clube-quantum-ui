import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 24px;
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextStrong = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 1080px) {
    font-size: 14px;
  }

  @media (max-width: 545px) {
    font-size: 12px;
  }
`;

export const TextData = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 414px) {
    font-size: 10px;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 414px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  display: flex;
  gap: 10px;
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};

  @media (max-width: 414px) {
    font-size: 10px;
  }
`;

export const Question = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
  @media (max-width: 1080px) {
    font-size: 18px;
  }

  @media (max-width: 545px) {
    font-size: 16px;
  }
`;

export const P = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 545px) {
    font-size: 10px;
  }
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;

  @media (max-width: 1080px) {
    font-size: 16px;
  }

  @media (max-width: 545px) {
    font-size: 14px;
  }
`;
