import styled from 'styled-components';

export const FieldInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span:first-child {
    font-weight: 600;
  }

  @media (max-width: 430px) {
    flex-direction: column;
  }

  @media (max-width: 350px) {
    align-items: center;
  }
`;
