import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin: 0 42px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 48px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;

  @media (max-width: 572px) {
    align-items: flex-start;
    gap: 32px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 80px;
  height: 80px;
  border-radius: 106px;
  background: ${({ theme }) => theme.colors.ghostwhite};
`;

export const ContentColumm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StoreName = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const StoreType = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 414px) {
    font-size: 12px;
  }
`;

export const StoreHoursData = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 252px;
`;

export const StoreStatus = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};

  @media (max-width: 1028px) {
    font-size: 18px;
  }
`;

export const StoreOpeningHours = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};

  @media (max-width: 414px) {
    font-size: 12px;
  }
`;

export const ContentCashBack = styled.div`
  display: flex;
  align-items: center;
  width: 188px;
  height: 32px;
  font-size: 16px;
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  color: ${({ theme }) => theme.colors.ghostwhite};
  border-radius: 5px;
  padding: 4px 8px;
  gap: 10px;

  @media (max-width: 414px) {
    width: 141px;
    font-size: 12px;
  }
`;

export const ContainerEvaluations = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 401px) {
    display: none;
  }
`;

export const TitleEvaluations = styled.h3`
  text-align: start;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const ContentStar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 48px;
`;

export const StoreGrade = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.yellowStar};
`;

export const QuantEvaluations = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.primaryLight};
`;

export const SubTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 414px) {
    font-size: 18px;
  }
`;

export const ContainerInfo = styled(ContentRow)`
  margin-top: 24px;
  align-items: flex-start;
  gap: 24px 45px;
  margin-bottom: 48px;
  flex-wrap: wrap;
`;

export const ContentInfo = styled(ContentColumm)`
  max-width: 370px;
  gap: 12px;
  h2 {
    margin-bottom: 12px;
  }
`;

export const TextInfo = styled(StoreOpeningHours)``;

export const CommerceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  row-gap: 2rem;
  margin-top: 44px;
  margin-bottom: 110px;

  @media (max-width: 1476px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
`;
