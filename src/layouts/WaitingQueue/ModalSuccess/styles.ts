import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 29px;
  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin-top: 28px;
`;

export const Paragraph = styled.p`
  text-align: justify;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-top: 27px;
`;

export const Text = styled.p`
  text-align: center;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const TextBlue = styled.p`
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-top: 17px;
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
