import { FieldInfo } from 'layouts/TimSubscriptionPlan/Components/FieldInfo';

import { GenericCard } from '../../ConfirmRegistrationDetails/GenericCard';
import * as S from './styles';

export function RegisteredCard() {
  return (
    <GenericCard title="Seu cartão cadastrado">
      <FieldInfo>
        <span>Nome</span>
        <span>Rafael Gael Caio Teixeira</span>
      </FieldInfo>
      <FieldInfo>
        <span>Cartão</span>
        <span>**** **** **** 0768</span>
      </FieldInfo>
      <FieldInfo>
        <span>Confirme o CVV</span>
        <S.InputCVV type="text" />
      </FieldInfo>
      <FieldInfo>
        <span>Validade</span>
        <span>03/29</span>
      </FieldInfo>
    </GenericCard>
  );
}
