import * as S from './styles'

export function Skeleton () {
  return (
    <S.Container>
      <S.DivItem />
      <S.DivItem />
      <S.DivItem />
      <S.DivDisabled>
        <S.DivItem />
      </S.DivDisabled>
    </S.Container>
  )
}
