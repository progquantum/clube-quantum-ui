import Image from 'next/image'

import * as S from './styles'
import { SelectPlanProps } from './types'

export function SelectPlan ({ data }:SelectPlanProps) {
  return (

    <S.DivSelectPlan>
      <S.HeaderSelectPlan>
        <Image
          width={17.89}
          height={19.87}
          src='/images/icon-plan.svg'
          alt='Icone plano'
        />
        <S.TitlePlan>{data?.subscription?.plan_name}</S.TitlePlan>
      </S.HeaderSelectPlan>
      <S.DivStatusPlan>
        <S.TitleStatusPlan>{data?.subscription?.plan_name}</S.TitleStatusPlan>
        <S.StatusPlan>{data?.subscription?.is_active ? 'Ativo' : 'Cancelado'}</S.StatusPlan>
      </S.DivStatusPlan>
      <S.Deadline>
        <S.TextDeadline>Sua assinatura será renovada em 15/xx/xxxx</S.TextDeadline>
        <S.ButtonCancel>Cancelar</S.ButtonCancel>
      </S.Deadline>
    </S.DivSelectPlan>
  )
}
