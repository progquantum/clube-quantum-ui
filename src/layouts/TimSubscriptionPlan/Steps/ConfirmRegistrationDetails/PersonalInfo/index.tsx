import { FieldInfo } from 'layouts/TimSubscriptionPlan/Components/FieldInfo';

import { GenericCard } from '../GenericCard';

export function PersonalInfo() {
  const isCNPJ = false;
  return (
    <GenericCard title="Informações pessoais">
      <FieldInfo>
        <span>{isCNPJ ? 'Razão Social' : 'Nome'}</span>
        <span>Rafael Gael Caio Teixeira</span>
      </FieldInfo>
      <FieldInfo>
        <span>{isCNPJ ? 'CNPJ' : 'CPF'}</span>
        <span>{isCNPJ ? '29.489.143/0001-90' : '000.000.000-00'}</span>
      </FieldInfo>
      {isCNPJ && (
        <>
          <FieldInfo>
            <span>Nome do responsável</span>
            <span>Rafael Gael Caio Teixeira</span>
          </FieldInfo>
          <FieldInfo>
            <span>CPF do responsável</span>
            <span>000.000.000-00</span>
          </FieldInfo>
        </>
      )}
      <FieldInfo>
        <span>{isCNPJ ? 'Data de Nasc. Responsável' : 'Data de Nasc.'}</span>
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
