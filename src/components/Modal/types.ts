import React from 'react'

export type ModalProps = {
    isActive: boolean,
    onClose: () => void,
    children: React.ReactNode,
    width: number,
}

export type ModalSizeProps = {
    width: number
}
