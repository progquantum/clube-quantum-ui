import { useGetLoggedUser } from 'hooks/useGetLoggedUser';
import { FieldInfo } from 'layouts/TimSubscriptionPlan/Components/FieldInfo';
import { formatCVV } from 'utils/formatters/formatCVV';

import { GenericCard } from '../../ConfirmRegistrationDetails/GenericCard';
import * as S from './styles';
import { RegisteredCardProps } from './types';

export function RegisteredCard({
  cvvValue,
  getCVV,
  paymentInfo,
}: RegisteredCardProps) {
  const { data: loggedUser } = useGetLoggedUser();
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
        <S.InputCVV
          type="text"
          value={cvvValue ?? cvvValue}
          onChange={e => getCVV(formatCVV(e.target.value))}
        />
      </FieldInfo>
      <FieldInfo>
        <span>Validade</span>
        <span>{paymentInfo?.credit_card?.expiration_date}</span>
      </FieldInfo>
    </GenericCard>
  );
}
