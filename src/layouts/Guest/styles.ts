import styled, { css } from 'styled-components';

export const Container = styled.main`
  max-width: 80rem;
  width: 100%;
  margin: 6rem auto;
  color: ${({ theme }) => theme.colors.gray[700]};

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-items: flex-start;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    gap: 70px;
  }
`;

const wrapperStyles = css`
  max-width: 370px;
  width: 100%;
  display: flex;
  flex-direction: column;

  a {
    height: 44px;
    border-radius: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const LeftWrapper = styled.div`
  ${wrapperStyles}

  padding-left: 1rem;

  h2 {
    font-weight: 900;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-weight: 500;
    margin-bottom: 3.125rem;
  }

  a {
    width: 250px;
    background-color: ${({ theme }) => theme.colors.midnightBlue};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 900;
  }
`;

export const RightWrapper = styled.div`
  ${wrapperStyles}

  > span {
    margin-bottom: 1.5rem !important;
  }

  h2 {
    font-weight: 900;
    margin-bottom: 1rem;
  }

  h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  a {
    width: 140px;
    background-color: ${({ theme }) => theme.colors.mediumaquamarine};
    color: ${({ theme }) => theme.colors.stratos};
    font-weight: 700;
    align-self: center;
  }

  @media (max-width: 720px) {
    padding-left: 1rem;
  }
`;
