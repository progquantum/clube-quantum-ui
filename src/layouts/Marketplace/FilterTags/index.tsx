import { SectionTitle } from '../Components/SectionTitle';
import * as S from './styles';
import { Tag } from './Tag';

export function FilterTags() {
  return (
    <S.Container>
      <SectionTitle>Filtrar</SectionTitle>
      <button type="button">
        <Tag>Mercados</Tag>
      </button>
      <button type="button">
        <Tag>Restaurantes</Tag>
      </button>
      <button type="button">
        <Tag>Hotéis</Tag>
      </button>
      <button type="button">
        <Tag>Postos de Combustível</Tag>
      </button>
      <button type="button">
        <Tag>Farmácias</Tag>
      </button>
      <button type="button">
        <Tag>Cafeterias e Padarias</Tag>
      </button>
    </S.Container>
  );
}
