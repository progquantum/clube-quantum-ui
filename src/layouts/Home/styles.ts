import styled from 'styled-components';

import { Button } from 'components/Button';

export const Background = styled.main`
  height: 100%;
`;

export const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1100px) {
    max-width: 832px;
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 71.51px;
  @media (max-width: 882px) {
    flex-direction: column;
    justify-content: center;
    img {
      max-width: 377.68px !important;
    }
  }
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 520px;

  @media (max-width: 1100px) {
    max-width: 420px;
  }

  @media (max-width: 497px) {
    max-width: 320px;
  }
`;

export const StyledButton = styled(Button)`
  max-width: 121px;
  max-height: 41px;

  @media (max-width: 497px) {
    max-width: 330px;
    width: 100%;
  }
`;
export const TitleCard1 = styled.h3`
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 150%;
  background: linear-gradient(90.31deg, #8fc93a -1.94%, #3cd2a2 102.2%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 1100px) {
    font-size: 18px;
  }

  @media (max-width: 497px) {
    font-size: 16px;
  }
`;

export const SubTitleCard1 = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 1100px) {
    font-size: 24px;
  }

  @media (max-width: 497px) {
    font-size: 20px;
  }
`;

export const ContainerRowParag = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 24px;
  gap: 12px;
`;

export const TitleParag = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;

  @media (max-width: 1100px) {
    font-size: 16px;
  }
`;

export const Parag = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;

  @media (max-width: 1100px) {
    font-size: 12px;
  }
`;

export const TitleCard2 = styled.h3`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 150%;
  background: linear-gradient(267.68deg, #001f80 -86.29%, #0c61ff 106.13%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 1100px) {
    font-size: 18px;
  }

  @media (max-width: 497px) {
    font-size: 16px;
  }
`;

export const SubTitleCard2 = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 16px;

  @media (max-width: 1100px) {
    font-size: 24px;
  }

  @media (max-width: 497px) {
    font-size: 20px;
  }
`;
