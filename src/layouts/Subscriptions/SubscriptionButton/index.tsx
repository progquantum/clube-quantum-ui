import { Button } from 'components/Button'

import { SubscriptionButtonProps } from './types'

export function SubscriptionButton ({ onOpenModalCvcRequest }:SubscriptionButtonProps) {
  return (
    <Button
      variant='primary'
      onClick={onOpenModalCvcRequest}
    >
      Continuar
    </Button>
  )
}
