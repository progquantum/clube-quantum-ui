import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
  @media (max-width: 555px) {
    margin: 0 42px 80px 42px;
  }
`;

export const ContentTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 58px;
`;

export const LeftStyle = styled.div`
  position: absolute;
  width: 27.68px;
  height: 48px;
  left: 0px;
  border-radius: 5px 11px 11px 5px;
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};

  @media (max-width: 700px) {
    width: 18.46px;
    height: 32px;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 150%;
  text-align: center;
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  margin-top: 24px;

  @media (max-width: 700px) {
    font-size: 16px;
  }

  @media (max-width: 413px) {
    font-size: 14px;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 2px 4px 20px rgba(0, 31, 128, 0.25);
  border-radius: 15px;
  padding: 20px 24px;
  max-width: 420px;
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 700px) {
    font-size: 14px;
  }

  @media (max-width: 413px) {
    font-size: 12px;
  }
`;
