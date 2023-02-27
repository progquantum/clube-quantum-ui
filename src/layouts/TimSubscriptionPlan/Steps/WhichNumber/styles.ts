import styled from 'styled-components';

export const WhichNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: 5rem 0 2rem;
`;

export const CardContainer = styled.div`
  padding: 3rem 1.2rem 4rem;
  box-shadow: 2px 4px 20px rgba(0, 31, 128, 0.25);
  border-radius: 0.9rem;
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.gray[400]};
  width: 26rem;
  line-height: 1.5rem;
  padding: 1rem 0;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const Radio = styled.input`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;

  &:checked {
    border-color: ${({ theme }) => theme.colors.mediumslateBlue};
    background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  }
`;

export const RadioLabel = styled.label``;

export const SelectLabel = styled.label`
  display: block;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin: 1rem 0 0.5rem;
`;

export const PlanName = styled.h2`
  margin: 2rem 0 1rem;
`;

export const PlanPrice = styled.h1`
  color: ${({ theme }) => theme.colors.mediumslateBlue};
  margin-bottom: 0.5rem;
`;

export const PriceSubtitle = styled.span`
  font-size: 0.75rem;
`;

export const Select = styled.select`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 0.6rem;
  padding: 1rem;
  height: 3.6rem;
  width: 100%;
  outline: none;
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const Option = styled.option`
  display: block;
  outline: none;
  padding: 1rem;
  cursor: pointer;
  &:not(:first-of-type) {
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const Input = styled.input`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: 0.6rem;
  padding: 1rem;
  height: 3.6rem;
  width: 100%;
  outline: none;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 420px) {
    flex-direction: column;
    width: 100%;
  }
`;
