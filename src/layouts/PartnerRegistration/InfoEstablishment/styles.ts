import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;
`;

export const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 60px;
  @media (max-width: 351px) {
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

  @media (max-width: 1129px) {
    font-size: 10px;
  }
`;

export const NextStepText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;

  @media (max-width: 1129px) {
    font-size: 10px;
  }

  @media (max-width: 660px) {
    display: none;
  }
  @media (max-width: 351px) {
    display: block;
  }
`;

export const Line = styled.div`
  width: 30.06px;
  height: 0.56px;
  background: ${({ theme }) => theme.colors.gray[200]};
  @media (max-width: 351px) {
    display: none;
  }
`;

export const HeadTitle = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 9px;
`;

export const Form = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const DivRow = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  margin-top: 24px;
  @media (max-width: 1174px) {
    flex-direction: column;
  }
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 24px;
`;

export const ContainerButton = styled.div`
  display: flex;
  max-width: 367px;
  width: 100%;
  gap: 16px;
  margin-top: 16px;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 8px;
`;
export const Logo = styled(Banner)`
  margin-top: 24px;
`;
export const TitleBanner = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 4px;
`;

export const TitleLogo = styled(TitleBanner)``;

export const SubTitleBanner = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 0.4rem;
`;

export const SubTitleLogo = styled(SubTitleBanner)``;

export const InputFile = styled.input`
  display: none;
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
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  gap: 0.6rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.mediumslateBlue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SelectUser = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 28px 0;
`;

export const UserData = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 4px;
`;

export const UserDataSince = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 4px;
  max-width: 87px;
  margin-right: 24px;
`;
export const UserName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const Text500 = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 0;
`;
export const Text600 = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const UserStatus = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 225px;
`;

export const Status = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.successLight};
  margin-bottom: 0;
  margin-right: 59px;
`;
