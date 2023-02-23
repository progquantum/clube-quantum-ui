import { FaMapMarkerAlt } from 'react-icons/fa';

import { Button } from 'components/Button';

import * as S from '../styles';

export function ShowOffers() {
  return (
    <S.Container>
      <S.MobileLayout>
        <FaMapMarkerAlt size={20} />
        <S.TextContainer>
          <S.Text>Mostrando ofertas em</S.Text>
          <S.HighlightedText>São Paulo - SP</S.HighlightedText>
        </S.TextContainer>
      </S.MobileLayout>

      <S.ButtonContainer>
        <Button>Acessar o marketplace</Button>
      </S.ButtonContainer>
    </S.Container>
  );
}
