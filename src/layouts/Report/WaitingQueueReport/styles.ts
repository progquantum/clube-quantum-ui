import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
  & > button {
    margin-left: auto;
    max-width: 189px;
    max-height: 41px;
  }
`;

export const Title = styled.h4`
  margin-right: auto;
`;

export const ContentContainer = styled.div`
  box-shadow: 0px 0px 20px 0px #00000014;
  border-radius: 0.7rem;
  padding: 0 3rem 1rem;
  width: 100%;
  margin-top: 2rem;
`;
