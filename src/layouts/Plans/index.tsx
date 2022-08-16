import Image from 'next/image'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Plans } from 'components/Plans'
import { SideBar } from 'components/SideBar'
import { useFindMe } from 'hooks/useFindMe'

import * as S from './styles'

export function PlansPage () {
  const { data } = useFindMe()
  return (
    <>
      <Header />
      <S.Main>
        <SideBar />
        <Plans titleButton='Continuar'>
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
              <S.StatusPlan>{data?.subscription?.is_active ? 'Ativo' : 'Inativo'}</S.StatusPlan>
            </S.DivStatusPlan>
            <S.Deadline>
              <S.TextDeadline>Sua assinatura será renovada em 15/xx/xxxx</S.TextDeadline>
              <S.ButtonCancel>Cancelar</S.ButtonCancel>
            </S.Deadline>
          </S.DivSelectPlan>
        </Plans>
      </S.Main>
      <Footer />

    </>
  )
}
