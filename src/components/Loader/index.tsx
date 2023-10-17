import * as S from './styles';

export function Loader() {
  return (
    <S.Container data-testid="loader">
      <S.AnimetedLoader data="/images/loader.svg" type="image/svg+xml" />
    </S.Container>
  );
}
