import Image from 'next/image'
import Modal from 'react-modal'

import { avatarModalProps } from './types'
import * as S from './styles'

export function UploadAvatarModal ({ isOpen, onRequestClose }:avatarModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='react-modal-container'
      overlayClassName='react-modal-overlay'
    >
      <S.Container>
        <h1>Alterar imagem do perfil</h1>
        <Image src='/images/upload.svg' width={105} height={105} />
        <S.UploadButton>
          Selecione a imagem
        </S.UploadButton>
        <S.CancelButton onClick={onRequestClose}>
          Cancelar
        </S.CancelButton>
      </S.Container>
    </Modal>
  )
}
