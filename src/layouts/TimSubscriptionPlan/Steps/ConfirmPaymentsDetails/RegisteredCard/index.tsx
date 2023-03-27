import { useGetLoggedUser } from 'hooks/useGetLoggedUser';
import { useWallet } from 'hooks/useWallet';
import { FieldInfo } from 'layouts/TimSubscriptionPlan/Components/FieldInfo';

import { GenericCard } from '../../ConfirmRegistrationDetails/GenericCard';
import * as S from './styles';

export function RegisteredCard() {
  const { data: loggedUser } = useGetLoggedUser();
  const { data: paymentInfo } = useWallet();

  return (
    <GenericCard title="Seu cartão cadastrado">
      <FieldInfo>
        <span>Nome</span>
        <span>{loggedUser?.name}</span>
      </FieldInfo>
      <FieldInfo>
        <span>Cartão</span>
        <span>**** **** **** {paymentInfo?.credit_card?.last_digits}</span>
      </FieldInfo>
      <FieldInfo>
        <span>Confirme o CVV</span>
        <S.InputCVV type="text" />
      </FieldInfo>
      <FieldInfo>
        <span>Validade</span>
        <span>{paymentInfo?.credit_card?.expiration_date}</span>
      </FieldInfo>
    </GenericCard>
  );
}
