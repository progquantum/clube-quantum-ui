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

  @media (max-width: 545px) {
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

  @media (max-width: 545px) {
    font-size: 16px;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 58px;
  background: #ffffff;
  box-shadow: 2px 4px 20px rgba(0, 31, 128, 0.25);
  border-radius: 15px;
  padding: 60px 30px 80px;
  gap: 32px;
  max-width: 480px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
  display: flex;
  align-items: center;
  text-align: center;
`;

export const PlanType = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  color: ${({ theme }) => theme.colors.midnightBlue};
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
`;

export const Info = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[700]};
`;
