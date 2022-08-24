import * as S from './styles'

export function Skeleton () {
  return (
    <S.Container>
      <div>
        <S.HeadingSkeleton />
        <S.ContentSkeleton />
        <S.ButtonSkeleton />

        <S.ContainerLinks>
          <S.LinkSkeleton count={5} />
        </S.ContainerLinks>
      </div>

      <S.ImageSkeleton />
    </S.Container>
  )
}
