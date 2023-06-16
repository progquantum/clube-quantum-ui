import { FaMapMarkerAlt } from 'react-icons/fa';

import * as S from './styles';

export function ShowOffers() {
  return (
    <S.Container>
      <FaMapMarkerAlt size={20} />
      <S.TextContainer>
        <S.Text>Mostrando ofertas em</S.Text>
        <S.HighlightedText>São Paulo - SP</S.HighlightedText>
      </S.TextContainer>
    </S.Container>
  );
}
