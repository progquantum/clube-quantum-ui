import { useState } from 'react'

export default function useModal () {
  const [modalOpen, setModalOpen] = useState(false)
  const open = () => {
    if (!modalOpen) {
      setModalOpen(true)
    }
  }
  const close = () => {
    if (modalOpen) {
      setModalOpen(false)
    }
  }
  return {
    modalOpen,
    open,
    close
  }
}
