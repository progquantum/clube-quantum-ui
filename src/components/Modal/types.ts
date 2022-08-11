import React from 'react'

export type ModalProps = {
    isActive: boolean,
    close: () => void,
    children: React.ReactNode,
    width: number,
}

export type ModalSizeProps = {
    width: number
}
