import styled from 'styled-components'

import { ModalSizeProps } from './types'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10;
    position: fixed;
    top: 0;
    right: 0;
    -webkit-overflow-scrolling: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalBox = styled.div<ModalSizeProps>`
    width: ${({ width }) => width}px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: .9rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    padding: 1.25rem 1.5rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 12%;
    margin: 0 auto;
    z-index: 1000;
`
