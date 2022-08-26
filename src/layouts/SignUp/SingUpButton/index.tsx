import { Button } from 'components/Button'

import { SingUpButtonProps } from './types'

export function SingUpButton ({ onUpdateFormStep }: SingUpButtonProps) {
  return (
    <Button
      variant='primary'
      onClick={onUpdateFormStep}
    >
      Continuar
    </Button>
  )
}
