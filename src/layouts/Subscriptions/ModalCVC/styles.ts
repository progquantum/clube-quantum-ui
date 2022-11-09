import styled from 'styled-components';

export const CVCform = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: ${({ theme }) => theme.colors.white};
  margin-top: 1rem;
`;

export const Title = styled.p`
  display: flex;
  gap: 0.625rem;
  font-weight: 700;
  line-height: 1.5;
`;

export const Text = styled.p`
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray['400']};

  @media (max-width: 500px) {
    font-size: 0.85rem;
  }
`;

export const CardDataContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardDataTitle = styled.p`
  font-weight: 700;
  font-size: 1.125rem;

  @media (max-width: 500px) {
    font-size: 0.875rem;
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;

  > div {
    margin: 0;
    width: 100px;
  }

  @media (max-width: 767px) {
    font-size: 0.75rem;
  }
`;

export const CardData = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.375rem;

  @media (max-width: 500px) {
    font-size: 0.875rem;
  }
`;
