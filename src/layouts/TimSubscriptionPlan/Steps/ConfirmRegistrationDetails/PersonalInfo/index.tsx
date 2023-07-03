import { cpf } from 'cpf-cnpj-validator';

import { FieldInfo } from 'layouts/TimSubscriptionPlan/Components/FieldInfo';

import { GenericCard } from '../GenericCard';
import { PersonalInfoProps } from './types';

export function PersonalInfo({ loggedUser }: PersonalInfoProps) {
  const isCpf = cpf.isValid(loggedUser?.document);

  return (
    <GenericCard title="Informações pessoais">
      <FieldInfo>
        <span>{isCpf ? 'Nome' : 'Razão Social'}</span>
        <span>{loggedUser?.name}</span>
      </FieldInfo>
      <FieldInfo>
        <span>{isCpf ? 'CPF' : 'CNPJ'}</span>
        <span>{loggedUser?.document}</span>
      </FieldInfo>
      {loggedUser?.birth_date && (
        <FieldInfo>
          <span>Data de Nasc.</span>
          <span>
            {new Intl.DateTimeFormat('pt-BR').format(
              new Date(loggedUser?.birth_date),
            )}
          </span>
        </FieldInfo>
      )}
      <FieldInfo>
        <span>Telefone Atual</span>
        <span>{loggedUser?.phone}</span>
      </FieldInfo>
      <FieldInfo>
        <span>E-mail</span>
        <span>{loggedUser?.email}</span>
      </FieldInfo>
    </GenericCard>
  );
}
