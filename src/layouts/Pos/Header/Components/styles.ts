import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  align-items: center;
  @media (max-width: 420px) {
    font-size: 90%;
    padding: initial;
  }
`;
export const Text = styled.span``;

export const HighlightedText = styled.span`
  font-weight: 700;
  line-height: 0.9rem;
  display: inline-block;
  cursor: pointer;
  background: ${({ theme }) => theme.gradients.mediumsLateBlueToMidnightBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
`;

export const MobileLayout = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    & > ${TextContainer} {
      display: none;
    }

    & > svg {
      display: none;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: none;

  > bottom {
    font-size: 14px;
  }

  @media (max-width: 414px) {
    display: block;
  }
`;
