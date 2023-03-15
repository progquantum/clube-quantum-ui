import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px auto;
  max-width: 747px;

  @media (max-width: 1135px) {
    max-width: 365.5px;
  }

  @media (max-width: 399px) {
    max-width: 330px;
  }

  @media (max-width: 372px) {
    max-width: 300px;
  }
`;

export const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 44px;
  @media (max-width: 1135px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const Step = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const StepTextDone = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0;

  @media (max-width: 1135px) {
    font-size: 10px;
  }
`;

export const Line = styled.div`
  width: 30.06px;
  height: 0.56px;
  background: ${({ theme }) => theme.colors.gray[200]};
  @media (max-width: 1135px) {
    display: none;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.midnightBlue};
  margin-bottom: 48px;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 2px 4px 20px rgba(0, 31, 128, 0.25);
  border-radius: 15px;
  padding: 20px 24px;
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
  margin-bottom: 0;
`;

export const ContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TextStrong = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const TextData = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const ContainerButton = styled.div`
  display: flex;
  max-width: 367px;
  width: 100%;
  gap: 16px;
  margin-top: 16px;
`;

export const TitleOpeningHours = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const ContentColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  max-width: 365.5px;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 16px;
  @media (max-width: 1135px) {
    flex-direction: column;
  }
`;

export const ContainerTable = styled.div`
  width: 100%;
  margin-top: 32px;
  @media (max-width: 1135px) {
    width: 678px;
  }
`;

export const TopTable = styled.div`
  max-width: 747px;
  width: 100%;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 40px;
  background: ${({ theme }) => theme.colors.ghostwhite};
  border-radius: 10px 10px 0 0;
  @media (max-width: 1135px) {
    width: 678px;
  }
`;

export const TopParams = styled.h2`
  max-width: 172.75;
  width: 100%;
  text-align: start;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const Table = styled.div`
  display: flex;
  max-width: 747px;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px;
  gap: 24px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.07);
  border-radius: 0px 0px 10px 10px;
  @media (max-width: 1135px) {
    width: 678px;
  }
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Date = styled.p`
  max-width: 172.75;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  text-align: start;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const Percentage = styled.p`
  max-width: 172.75;
  width: 100%;
  text-align: start;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;
