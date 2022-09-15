import Image from 'next/image'

import { useAuthState } from 'contexts/auth/AuthContext'
import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase'

import * as S from './styles'

export function SelectPlan () {
  const { user } = useAuthState()
  const isPlanActive = user.subscription?.is_active ? 'Ativo' : 'Cancelado'
  const formattedPlanName = formatFirstLetterToUppercase(user.subscription?.plan_name)

  return (

    <S.DivSelectPlan>
      <S.HeaderSelectPlan>
        <Image
          width={17.89}
          height={19.87}
          src='/images/icon-plan.svg'
          alt='Icone plano'
        />
        <S.TitlePlan>Seu plano</S.TitlePlan>
      </S.HeaderSelectPlan>
      <S.DivStatusPlan>
        <S.TitleStatusPlan>
          {formattedPlanName}
        </S.TitleStatusPlan>
        <S.StatusPlan>
          {isPlanActive}
        </S.StatusPlan>
      </S.DivStatusPlan>
      <S.Deadline>
        <S.TextDeadline>Sua assinatura será renovada em 15/xx/xxxx</S.TextDeadline>
        <S.ButtonCancel>Cancelar</S.ButtonCancel>
      </S.Deadline>
    </S.DivSelectPlan>
  )
}
