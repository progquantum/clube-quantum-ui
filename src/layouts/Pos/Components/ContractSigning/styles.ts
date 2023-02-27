import styled from 'styled-components';

import { Button } from 'components/Button';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  @media (max-width: 700px) {
    font-size: 16px;
  }

  @media (max-width: 413px) {
    font-size: 14px;
  }
`;

export const TextTitle = styled.h3`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 700px) {
    font-size: 18px;
  }

  @media (max-width: 413px) {
    font-size: 12px;
  }
`;

export const Line = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  height: 2px;
`;

export const ContratctText = styled.p`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin: 15px 0;

  @media (max-width: 700px) {
    font-size: 20px;
  }

  @media (max-width: 413px) {
    font-size: 14px;
  }
`;

export const Name = styled.p`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 700px) {
    font-size: 20px;
  }

  @media (max-width: 413px) {
    font-size: 14px;
  }
`;

export const Status = styled.p`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.yellow};

  @media (max-width: 700px) {
    font-size: 20px;
  }

  @media (max-width: 413px) {
    font-size: 14px;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  max-width: 251px;
  margin: 16px auto 48px auto;
  background: ${({ theme }) => theme.colors.mediumslateBlue};
  border-radius: 5px;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 150%;

  @media (max-width: 700px) {
    max-width: 225px;
    font-weight: 800;
    font-size: 14px;
  }

  @media (max-width: 413px) {
    max-width: 190px;
    font-weight: 700;
    font-size: 12px;
  }
`;
