import styled from 'styled-components';

export const FieldInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  & > span:first-child {
    font-weight: 600;
    margin-right: auto;
    flex: 1 1 auto;
    text-align: center;
    max-width: max-content;
  }
  & > span:last-child {
    text-align: right;
    max-width: 15.6rem;
    overflow-wrap: break-word;

    @media (max-width: 400px) {
      max-width: 13rem;
    }
  }

  @media (max-width: 380px) {
    flex-direction: column;
    gap: 0.5rem;
    & > span:first-child {
      margin-right: 0;
    }
    & > span:last-child {
      text-align: center;
      max-width: 100%;
    }
  }
`;
