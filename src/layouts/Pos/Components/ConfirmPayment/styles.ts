import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
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

export const ContentColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 58px auto 0 auto;
  gap: 16px;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 2px 4px 20px rgba(0, 31, 128, 0.25);
  border-radius: 15px;
  padding: 20px 24px;
  max-width: 420px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PlanType = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  color: ${({ theme }) => theme.colors.midnightBlue};

  @media (max-width: 545px) {
    font-size: 28px;
  }
`;

export const PlanTypeWeight = styled(PlanType)`
  font-weight: 50;
  font-style: italic;
`;

export const PlanPrice = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 150%;
  background: ${({ theme }) => theme.colors.mediumslateBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  text-align: center;
`;
export const TypeCharge = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 0;
`;

export const Info = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextStrong = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const TextData = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
`;
