import Image from 'next/image'
import Modal from 'react-modal'
import { RiImageAddLine } from 'react-icons/ri'
import { ChangeEvent, FormEvent, useState } from 'react'

import { useQueryClient } from 'react-query'

import { QUERY_KEY_ME_PROFILE } from 'hooks/useFindMeProfile'
import { useUpdateAvatar } from 'hooks/useUpdateAvatar'

import { error } from 'helpers/notify/error'
import { success } from 'helpers/notify/success'

import { avatarModalProps } from './types'
import * as S from './styles'

export function UploadAvatarModal ({ isOpen, onRequestClose }: avatarModalProps) {
  const [imgPreview, setImgPreview] = useState<string>('')
  const [imageFile, setImageFile] = useState(null)

  const { mutateAsync: putAvatar, isLoading: loading } = useUpdateAvatar()
  const queryClient = useQueryClient()

  const handleCloseModal = () => {
    onRequestClose()
    setImgPreview(null)
  }

  const handleImgPreview = (event : ChangeEvent<HTMLInputElement>) => {
    const newImg = event.target.files[0]

    const imgSize = event.target.files[0].size
    const allowedSize = 2097152 // 2mb

    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg']

    if (event.target.files.length && allowedTypes.includes(newImg.type) && imgSize <= allowedSize) {
      setImgPreview(URL.createObjectURL(newImg))
      setImageFile(newImg)
    } else {
      error('Arquivo não suportado.')
    }
  }

  const handleUpdateAvatar = async (e: FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('file', imageFile)

    await putAvatar(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY_ME_PROFILE)
        success('Foto atualiza com sucesso.')
        handleCloseModal()
      }
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className='react-modal-container'
      overlayClassName='react-modal-overlay'
    >
      <S.Container>
        <h1>Alterar imagem do perfil</h1>
        {imgPreview ? <S.ImagePrev src={imgPreview} /> : <Image src='/images/upload.svg' width={110} height={110} />}

        <p>Extensões de arquivo permitidas: JPEG, JPG, PNG. <br />
          O tamanho máximo do arquivo de upload: 2MB.
        </p>
        <S.AvatarForm>
          <S.UploadButton htmlFor='uploadAvatar'>
            <RiImageAddLine /> Selecione uma imagem
          </S.UploadButton>

          <S.InputFile
            type='file'
            name='uploadAvatar'
            id='uploadAvatar'
            onChange={handleImgPreview}
          />

          {imgPreview && (
            <S.ConfirmButton
              type='submit'
              loading={loading}
              disabled={loading}
              onClick={(e) => handleUpdateAvatar(e)}
            >
              Salvar
            </S.ConfirmButton>
          )}
          <S.CancelButton onClick={handleCloseModal}>
            Cancelar
          </S.CancelButton>
        </S.AvatarForm>
      </S.Container>
    </Modal>
  )
}
