import { MdArrowBackIos } from 'react-icons/md';

import dayjs from 'dayjs';

import { formatDate } from 'utils/formatters/formatDate';

import { formatPrice } from 'utils/formatters/formatPrice';

import { Button } from 'components/Button';

import * as S from './styles';
import { RequestInfoProps } from './types';

export function RequestInfo({
  requestInfo,
  removeSelectedRequest,
}: RequestInfoProps) {
  function extractDDD(phoneNumber: string): string | null {
    const dddRegex = /^\+\d+\s\((\d+)\)/;
    const matches = phoneNumber.match(dddRegex);
    return matches ? matches[1] : null;
  }

  function extractNumber(phoneNumber: string): string | null {
    const numberRegex = /^\+\d+\s\(\d+\)\s(.+)/;
    const matches = phoneNumber.match(numberRegex);
    return matches ? matches[1] : null;
  }
  return (
    <S.Container>
      <S.TitleContainer>
        <MdArrowBackIos size={24} onClick={removeSelectedRequest} />
        <S.Title>Solicitações de Cancelamento</S.Title>
      </S.TitleContainer>
      <S.ContractName>
        {requestInfo.contract.user.individual_person.name}
      </S.ContractName>
      <S.DocumentKey>ID - {requestInfo.contract.document_key}</S.DocumentKey>
      <S.DataRow>
        <S.Bold>Data de Nasc.: </S.Bold>
        {dayjs(requestInfo.contract.user.individual_person.birth_date)
          .add(1, 'day')
          .format('DD/MM/YYYY')}
      </S.DataRow>
      <S.DataRow>
        <S.Bold>E-mail: </S.Bold>
        {requestInfo.contract.user.email}
      </S.DataRow>
      <S.DataRow>
        <S.Bold>Produto: </S.Bold>
        {requestInfo.contract.plan_name}
      </S.DataRow>
      <S.DataRow>
        <S.Bold>Número de telefone: </S.Bold>
        {extractNumber(requestInfo.contract.user.phone)}
      </S.DataRow>
      <S.DataRow>
        <S.Bold>DDD: </S.Bold>
        {extractDDD(requestInfo.contract.user.phone)}
      </S.DataRow>
      <S.DataRow>
        <S.Bold>Valor da Mensalidade: </S.Bold>
        {formatPrice(
          String(requestInfo.contract.marketplace_subscription.price_paid),
        )}
      </S.DataRow>
      <S.DataRow>
        <S.Bold>Data da aquisição: </S.Bold>
        {formatDate(requestInfo.contract.date_of_acquisition)}
      </S.DataRow>
      <p>
        Mas antes de continuar, entre em contato com o usuário para saber mais
        sobre o motivo do cancelamento.
      </p>
      <h6>Justificativa do cancelamento</h6>
      <p>{requestInfo.justification}</p>
      <h5>Relatório ADM</h5>
      <S.TextAreaReport placeholder="Digite seu relatório " />
      <Button variant="danger_outline">Aceitar cancelamento</Button>
      <Button variant="primary">Recusar cancelamento</Button>
    </S.Container>
  );
}
