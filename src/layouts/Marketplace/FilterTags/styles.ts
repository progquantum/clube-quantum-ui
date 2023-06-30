import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 0.8rem 0.9rem;
  border-radius: 50%;
  box-shadow: 0px 5px 20px rgba(69, 100, 0, 0.15);
  position: absolute;
  top: 79%;
  transform: translateY(-50%);
  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
  background-color: ${({ theme }) => theme.colors.midnightBlue};
`;

export const RightButton = styled(Button)`
  left: 0;
`;
export const LeftButton = styled(Button)`
  right: 0;
`;

export const ScrollContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  max-height: 6rem;
  overflow-y: scroll;
  padding: 0 4rem;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media (max-width: 450px) {
    padding: 0;
  }
`;

export const TagButton = styled.button<{ isSelected: boolean }>`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.midnightBlue};
  background-color: transparent;
  padding: 0.6rem 1rem;
  border-radius: 2rem;
  width: max-content;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
  margin: 0.3rem 0;
  & svg {
    margin-right: 0.5rem;
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      background: ${({ theme }) =>
        theme.gradients.midnightBlueToMediumsLateBlue};
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export const Container = styled.div`
  position: relative;
`;
