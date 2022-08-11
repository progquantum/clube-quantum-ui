import * as S from './styles'

export function Skeleton () {
  return (
    <S.MenuGrid>
      <S.AccountCotainer>
        <S.AccountBalance />
        <S.AccountBalanceIncoming />
      </S.AccountCotainer>

      <S.DivMarketplace />
      <S.CotainerPlan>
        <S.DivSelectPlan />
        <S.DivInviteFriends />
      </S.CotainerPlan>

    </S.MenuGrid>
  )
}
