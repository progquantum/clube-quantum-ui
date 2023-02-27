import { FieldInfo } from 'layouts/TimSubscriptionPlan/Components/FieldInfo';

import { GenericCard } from '../GenericCard';
import * as S from './styles';

export function AddressInfo() {
  return (
    <GenericCard title="Informações de endereço">
      <FieldInfo>
        <span>Rua</span>
        <span>Servidão Maria Goreti Matias</span>
      </FieldInfo>
      <FieldInfo>
        <span>Número</span>
        <span>861</span>
      </FieldInfo>
      <FieldInfo>
        <span>Complemento</span>
        <span>N/A</span>
      </FieldInfo>
      <FieldInfo>
        <span>Bairro</span>
        <span>Vendaval</span>
      </FieldInfo>
      <FieldInfo>
        <span>Cidade</span>
        <span>Biguaçu</span>
      </FieldInfo>
      <FieldInfo>
        <span>UF</span>
        <span>SC</span>
      </FieldInfo>
      <FieldInfo>
        <span>CEP</span>
        <span>88.164-130</span>
      </FieldInfo>
      <FieldInfo>
        <span>País</span>
        <span>Brasil</span>
      </FieldInfo>
      <S.Text>
        O chip será enviado no endereço cadastrado na plataforma, caso seja
        outro, pedimos que atualize as informações de endereço no seu perfil.
      </S.Text>
    </GenericCard>
  );
}
