import { useRouter } from 'next/router'

import { Button } from 'components/Button'
import { BANK_ACCOUNT_PAGE } from 'constants/routesPath'

export function ManagePlansButton () {
  const router = useRouter()
  const handlCreatePlan = () => {
    router.push(BANK_ACCOUNT_PAGE)
  }

  return (
    <Button
      variant='primary'
      onClick={handlCreatePlan}
    >
      Continuar
    </Button>
  )
}
