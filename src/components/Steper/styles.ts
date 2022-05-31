import styled from 'styled-components'

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;

  .rs-steps-item-status-finish {
    div:nth-of-type(2) {
      background-color: ${(props) => props.theme.colors.royalblue};
      border-color: ${(props) => props.theme.colors.royalblue};
      color: ${(props) => props.theme.colors.white};
    }
  }

  .rs-steps-item-status-process,
  .rs-steps-item-status-wait {
    div:nth-of-type(2) {
      background-color: ${(props) => props.theme.colors.white};
      border-color: ${(props) => props.theme.colors.darkslategray};

      span {
        display: none;
      }
    }
  }

  .rs-steps-item-content {
    div::after {
      border-color: ${(props) => props.theme.colors.darkslategray};
    }
  }
`
