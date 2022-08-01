import { useCallback } from 'react'
import { useCopyToClipboard } from 'react-use'
import { toast } from 'react-toastify'
import noop from 'lodash.noop'

import { ShareData } from './types'

export function useShare () {
  const [, copyToClipboard] = useCopyToClipboard()

  const share = useCallback(({ title, text, url }: ShareData) => {
    if (navigator?.share) {
      navigator.share({
        title,
        text,
        url
      }).catch(noop)

      return
    }

    if (!url) return

    copyToClipboard(url)

    toast.success('Link de convite copiado')
  }, [copyToClipboard, toast])

  return share
}
