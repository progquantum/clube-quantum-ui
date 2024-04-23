import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

export const Title = styled.h4`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
`;

export const Subtitle = styled.h5`
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
`;

export const TextValue = styled.span`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
`;

export const ProgressBar = styled.progress`
  width: 100%;
  height: 20px;
`;

export const Message = styled.p`
  color: #333;
  font-size: 16px;
`;

export const ProgressText = styled.span`
  color: ${({ theme }) => theme.colors.gray[300]};
  font-size: 28px;
  font-weight: 500;
`;
