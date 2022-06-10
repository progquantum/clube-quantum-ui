import styled from 'styled-components'

export const BlueBackground = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.royalblue};
  animation: fallAway 1s ease-in forwards;

  position: relative;
  z-index: 1;

  @keyframes fallAway {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
`

export const AnimationWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  z-index: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: show 1s ease-in forwards;

  @keyframes show {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  object {
    width: 100%;
    height: 100%;
  }
`
