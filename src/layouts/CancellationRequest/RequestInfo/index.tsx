import { MdArrowBackIos } from 'react-icons/md';

import { formatDate } from 'utils/formatters/formatDate';

import { formatPrice } from 'utils/formatters/formatPrice';

import { Button } from 'components/Button';

import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber';

import * as S from './styles';
import { RequestInfoProps } from './types';

export function RequestInfo({ requestInfo }: RequestInfoProps) {
  return (
    <S.Container>
      <S.TitleContainer>
        <MdArrowBackIos size={24} />
        <S.Title>Solicitações de Cancelamento</S.Title>
      </S.TitleContainer>
      <S.ContractName>{requestInfo.contractName}</S.ContractName>
      <S.DocumentKey>ID - {requestInfo.contractDocumentKey}</S.DocumentKey>
      <S.DataRow>
        <S.Bold>Tipo: </S.Bold>
        {requestInfo.contractType}
      </S.DataRow>
      <S.DataRow>
        <S.Bold>Data de Nasc.: </S.Bold>
        {formatDate(requestInfo.birthDate)}
      </S.DataRow>
      <S.DataRow>
        <S.Bold>E-mail: </S.Bold>
        {requestInfo.email}
      </S.DataRow>
      <S.DataRow>
        <S.Bold>Produto: </S.Bold>
        {requestInfo.productName}
      </S.DataRow>
      <S.DataRow>
        <S.Bold>Número de telefone: </S.Bold>
        {requestInfo.phoneNumber}
      </S.DataRow>
      <S.DataRow>
        <S.Bold>DDD: </S.Bold>
        {requestInfo.areaCode}
      </S.DataRow>
      <S.DataRow>
        <S.Bold>Valor da Mensalidade: </S.Bold>
        {formatPrice(String(requestInfo.monthlyFee))}
      </S.DataRow>
      <S.DataRow>
        <S.Bold>Data da aquisição: </S.Bold>
        {formatDate(requestInfo.acquisitionDate)}
      </S.DataRow>
      <p>
        Mas antes de continuar, entre em contato com o usuário para saber mais
        sobre o motivo do cancelamento.
      </p>
      <h5>Justificativa do cancelamento</h5>
      <p>{requestInfo.cancellationJustification}</p>
      <h5>Relatório ADM</h5>
      <S.TextAreaReport placeholder="Digite seu relatório " />
      <Button variant="danger_outline">Aceitar cancelamento</Button>
      <Button variant="primary">Recusar cancelamento</Button>
    </S.Container>
  );
}
