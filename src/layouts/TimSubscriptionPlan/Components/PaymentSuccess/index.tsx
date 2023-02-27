import { FcCheckmark } from 'react-icons/fc';

import * as S from './styles';

export function PaymentSuccessModal() {
  return (
    <S.ModalContainer>
      <S.Title>
        <FcCheckmark size={25} />
        <span>Sucesso de pagamento</span>
      </S.Title>
      <S.Message>Pagamento realizado com sucesso!</S.Message>
      <S.Button>Entendi</S.Button>
    </S.ModalContainer>
  );
}
