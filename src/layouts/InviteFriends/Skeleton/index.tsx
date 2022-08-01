import * as S from './styles'

export function Skeleton () {
  return (
    <S.Container>
      <S.Wrap>
        <S.HeadingSkeleton />
        <S.ContentSkeleton />
        <S.ButtonSkeleton />

        <S.ContainerLinks>
          <S.LinkSkeleton count={5} />
        </S.ContainerLinks>
      </S.Wrap>

      <S.ImageSkeleton />
    </S.Container>
  )
}
