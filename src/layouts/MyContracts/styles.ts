import styled from 'styled-components';

export const MyContractsContainer = styled.div`
  margin: 2rem 1rem;
  width: 100%;
  & > div:nth-child(2) {
    max-width: 736.06px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const FallbackComponent = styled(MyContractsContainer)`
  border-radius: 0.9rem;
  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  height: max-content;

  & div:first-child {
    align-self: flex-start;
    color: ${({ theme }) => theme.colors.gray['400']};
    & svg {
      margin-right: 1rem;
    }
  }
  & p {
    font-size: 1.4rem;
    text-align: center;
    width: 60%;
  }
`;
