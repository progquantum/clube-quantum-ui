import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  width: 30rem;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  align-items: center;
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  border-radius: 0.8rem;
  @media (max-width: 520px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  background-image: ${({ theme }) => theme.gradients.lightgreenToGreen};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Message = styled.p`
  text-align: center;
  font-size: 115%;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const PhoneNumber = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  & span:first-child {
    font-weight: 600;
    background-image: ${({ theme }) =>
      theme.gradients.midnightBlueToMediumsLateBlue};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const FinishButton = styled.button`
  width: 30rem;
  display: block;
  margin: 2rem auto;
  padding: 1rem 0;
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.mediumslateBlue};
  transition: all 0.2s ease;
  font-weight: 600;
  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.mediumslateBlue};
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
