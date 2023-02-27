import { FieldInfo } from 'layouts/TimSubscriptionPlan/Components/FieldInfo';

import { GenericCard } from '../GenericCard';

export function PersonalInfo() {
  return (
    <GenericCard title="Informações pessoais">
      <FieldInfo>
        <span>Nome</span>
        <span>Rafael Gael Caio Teixeira</span>
      </FieldInfo>
      <FieldInfo>
        <span>CPF</span>
        <span>000.000.000-00</span>
      </FieldInfo>
      <FieldInfo>
        <span>Data de Nasc.</span>
        <span>06/07/1981</span>
      </FieldInfo>
      <FieldInfo>
        <span>Telefone Atual</span>
        <span>(48) 9 8452-8944</span>
      </FieldInfo>
      <FieldInfo>
        <span>E-mail</span>
        <span>rafaelgaelteixeira@maptec.com.br</span>
      </FieldInfo>
    </GenericCard>
  );
}
