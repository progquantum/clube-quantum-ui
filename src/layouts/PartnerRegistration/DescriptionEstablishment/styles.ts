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
  @media (max-width: 375px) {
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
  @media (max-width: 375px) {
    display: block;
  }
`;

export const Line = styled.div`
  width: 30.06px;
  height: 0.56px;
  background: ${({ theme }) => theme.colors.gray[200]};
  @media (max-width: 375px) {
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
`;

export const Form = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const ContainerButton = styled.div`
  display: flex;
  max-width: 367px;
  width: 100%;
  gap: 16px;
  margin-top: 16px;
`;
