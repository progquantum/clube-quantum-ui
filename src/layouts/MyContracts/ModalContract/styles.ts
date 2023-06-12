import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 12px;
  flex-wrap: wrap;
  gap: 12px;
  margin: 1.2rem 0 0;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 16px 16px;
  gap: 8px;
  flex: 1;
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

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 1rem;

  @media (min-width: 550px) {
    & > button:nth-child(1) {
      width: 30%;
    }
    & > button:nth-child(2) {
      width: 35%;
    }
    & > button:nth-child(3) {
      width: 15%;
    }
  }
`;
