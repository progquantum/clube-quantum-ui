import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  height: 870px;

  & img {
    height: 100%;
    max-width: 100%;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 58px;
  background: #ffffff;
  box-shadow: 2px 4px 20px rgba(0, 31, 128, 0.25);
  border-radius: 15px;
  padding: 60px 30px 80px;
  max-width: 420px;

  & img {
    max-width: 100%;
    width: 100%;
    margin-top: 2rem;
  }
`;

export const Title = styled.h4`
  background: ${({ theme }) => theme.gradients.mediumsLateBlueToMidnightBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Label = styled(Title)`
  margin-top: 2rem;
  font-size: 0.9rem;
  text-align: center;
`;

export const UnorderedList = styled.ul`
  margin-top: 2rem;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  margin: 1rem 0;
  & > svg {
    flex-shrink: 0;
    margin-right: 0.8rem;
    height: 100%;
    align-self: center;
  }
  & > span {
    color: ${({ theme }) => theme.colors.gray[700]};
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  max-width: 360px;
  margin: 1rem auto 0;
  justify-content: center;
  gap: 1.5rem;

  & > button {
    max-width: 122px;
    max-height: 41px;
  }
`;

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1.4rem;
  & > span {
    text-align: center;
    font-size: 1.2rem;
  }
`;
