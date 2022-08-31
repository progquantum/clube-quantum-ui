import * as S from './styles'

export function Skeleton () {
  return (
    <S.Container>
      <div>
        <S.HeadingSkeleton />
        <S.ContentSkeleton />
        <S.ButtonSkeleton />

      </div>

      <S.ImageSkeleton />
    </S.Container>
  )
}
