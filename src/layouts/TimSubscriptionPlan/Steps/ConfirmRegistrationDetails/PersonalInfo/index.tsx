import { FieldInfo } from 'layouts/TimSubscriptionPlan/Components/FieldInfo';

import { GenericCard } from '../GenericCard';
import { PersonalInfoProps } from './types';

export function PersonalInfo({ loggedUser }: PersonalInfoProps) {
  const regexCpf =
    /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/;
  const isCpf = regexCpf.test(loggedUser?.document);

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
      <FieldInfo>
        <span>Data de Nasc.</span>
        <span>
          {loggedUser &&
            new Intl.DateTimeFormat('pt-BR').format(
              new Date(loggedUser?.birth_date),
            )}
        </span>
      </FieldInfo>
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
