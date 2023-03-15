import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 10px;
  @media (max-width: 1129px) {
    flex-direction: column;
  }
`;
