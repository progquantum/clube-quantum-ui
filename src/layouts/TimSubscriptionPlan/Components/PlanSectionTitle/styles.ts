import styled from 'styled-components';

type TitleContainerProps = {
  variant: 'error';
};

export const TitleContainer = styled.div<TitleContainerProps>`
  display: flex;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 600;
  background-image: ${({ variant, theme }) =>
    variant === 'error'
      ? theme.gradients.dangerGradient
      : theme.gradients.lightgreenToGreen};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0.7rem 3rem 0;
  position: relative;
  width: 100%;
  margin: 3rem 0;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 1.3rem;
  }

  @media (max-width: 380px) {
    font-size: 1rem;
  }

  &::before {
    content: '';
    display: block;
    width: 1.8rem;
    height: 100%;
    background: ${({ variant, theme }) =>
      variant === 'error'
        ? theme.gradients.dangerGradient
        : theme.gradients.lightgreenToGreen};
    border-radius: 0.4rem 0.8rem 0.8rem 0.4rem;
    position: absolute;
    top: 0;
    left: 0;

    @media (max-width: 380px) {
      width: 1rem;
    }
  }
`;
