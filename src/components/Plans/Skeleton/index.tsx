import * as S from './styles'

export function Skeleton () {
  return (
    <S.Container>
      <S.Wrapper />
      <S.DivSelectPlan />
      <S.PlansContents>
        <S.PlanContentsWrapper />
        <S.PlanContentsWrapperMidle />
        <S.PlanContentsWrapper />
      </S.PlansContents>
    </S.Container>
  )
}
