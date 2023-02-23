import { MdAssignmentInd } from 'react-icons/md';

import { useTheme } from 'styled-components';

import { Button } from 'components/Button';

import * as S from './styles';
import { Props } from './types';

export function ConfirmRegistration({ onNextStep, onPreviousStep }: Props) {
  const { colors } = useTheme();

  return (
    <S.Container>
      <S.ContentTitle>
        <S.LeftStyle />
        <S.Title>Confirmar dados de cadastro</S.Title>
      </S.ContentTitle>
      <S.ContentCards>
        <S.ContentColumn>
          <S.Card>
            <S.Text>
              <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
              Seu plano escolhido
            </S.Text>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                margin: '24px 0',
                justifyContent: 'center',
              }}
            >
              <S.PlanType>Quantum </S.PlanType>
              <S.PlanTypeWeight> Smart</S.PlanTypeWeight>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '12px',
                justifyContent: 'center',
              }}
            >
              <S.PlanPrice>R$ 44,90 </S.PlanPrice>
              <S.TypeCharge>/Mês</S.TypeCharge>
            </div>
            <S.Info>Cobrança mensal no Cartão Banco UM</S.Info>
          </S.Card>
          <S.Card>
            <S.Text>
              <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
              Informações pessoais
            </S.Text>
            <div
              style={{
                display: 'flex',
                marginTop: '26.44px',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <S.ContentRow>
                <S.TextStrong>Nome</S.TextStrong>
                <S.TextData>Rafael Gael Caio Teixeira</S.TextData>
              </S.ContentRow>
              <S.ContentRow>
                <S.TextStrong>CPF</S.TextStrong>
                <S.TextData>000.000.000-00</S.TextData>
              </S.ContentRow>
              <S.ContentRow>
                <S.TextStrong>Data de Nasc.</S.TextStrong>
                <S.TextData>06/07/1981</S.TextData>
              </S.ContentRow>
              <S.ContentRow>
                <S.TextStrong>Telefone Atual</S.TextStrong>
                <S.TextData>(48) 9 8452-8944</S.TextData>
              </S.ContentRow>
              <S.ContentRow>
                <S.TextStrong>E-mail</S.TextStrong>
                <S.TextData>rafaelgaelteixeira@maptec.com.br</S.TextData>
              </S.ContentRow>
            </div>
          </S.Card>
        </S.ContentColumn>

        <S.Card>
          <S.Text>
            <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
            Informações de endereço
          </S.Text>
          <div
            style={{
              display: 'flex',
              marginTop: '26.44px',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <S.ContentRow>
              <S.TextStrong>Rua</S.TextStrong>
              <S.TextData>Servidão Maria Goreti Matias</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>Número</S.TextStrong>
              <S.TextData>861</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>Complemento</S.TextStrong>
              <S.TextData>N/A</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>Bairro</S.TextStrong>
              <S.TextData>Vendaval</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>Cidade</S.TextStrong>
              <S.TextData>Biguaçu</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>UF</S.TextStrong>
              <S.TextData>SC</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>CEP</S.TextStrong>
              <S.TextData>88.164-130</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>País</S.TextStrong>
              <S.TextData>Brasil</S.TextData>
            </S.ContentRow>
          </div>
        </S.Card>
      </S.ContentCards>

      <div
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '420px',
          gap: '12px',
          margin: '16px auto 0 auto',
        }}
      >
        <Button variant="secondary" onClick={onPreviousStep}>
          Voltar
        </Button>
        <Button variant="primary" onClick={onNextStep}>
          Seguir
        </Button>
      </div>
    </S.Container>
  );
}
