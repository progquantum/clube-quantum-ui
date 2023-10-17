import { FieldInfo } from 'layouts/TimSubscriptionPlan/Components/FieldInfo';

import { GenericCard } from '../GenericCard';
import * as S from './styles';
import { AddressInfoProps } from './types';

export function AddressInfo({ loggedUser }: AddressInfoProps) {
  return (
    <GenericCard title="Informações de endereço">
      <FieldInfo>
        <span>Rua</span>
        <span>{loggedUser?.address?.street}</span>
      </FieldInfo>
      <FieldInfo>
        <span>Número</span>
        <span>{loggedUser?.address?.number}</span>
      </FieldInfo>
      <FieldInfo>
        <span>Complemento</span>
        <span>{loggedUser?.address?.complement}</span>
      </FieldInfo>
      <FieldInfo>
        <span>Bairro</span>
        <span>{loggedUser?.address?.neighborhood}</span>
      </FieldInfo>
      <FieldInfo>
        <span>Cidade</span>
        <span>{loggedUser?.address?.city}</span>
      </FieldInfo>
      <FieldInfo>
        <span>UF</span>
        <span>{loggedUser?.address?.state}</span>
      </FieldInfo>
      <FieldInfo>
        <span>CEP</span>
        <span>{loggedUser?.address?.zip_code}</span>
      </FieldInfo>
      <FieldInfo>
        <span>País</span>
        <span>{loggedUser?.address?.country}</span>
      </FieldInfo>
      <S.Text>
        O chip será enviado no endereço cadastrado na plataforma, caso seja
        outro, pedimos que atualize as informações de endereço no seu perfil.
      </S.Text>
    </GenericCard>
  );
}
