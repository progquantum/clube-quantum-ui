import { useTheme } from 'styled-components';

import { BiCheck } from 'react-icons/bi';

import Link from 'next/link';

import { Button } from 'components/Button';

import { DASHBOARD_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function Success() {
  const { colors } = useTheme();

  return (
    <S.Container>
      <S.ContentTitle>
        <S.LeftStyle />
        <S.Title>Sucesso!</S.Title>
      </S.ContentTitle>

      <S.Card>
        <BiCheck size={35} color={colors.mediumslateBlue} />
        <S.Title>Aquisição da sua Quantum Smart feita com sucesso!</S.Title>
        <S.Text>
          <strong>Agora é com a gente!</strong> <br /> Ligaremos para você com
          as instruções de uso e enviaremos para o seu e-mail o rastreamento,
          para você acompanhar a entrega.
          <br /> <strong>Bem vindo ao Clube Quantum e Boas Vendas!</strong>
        </S.Text>
      </S.Card>

      <div
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '420px',
          gap: '12px',
          margin: '16px auto 0 auto',
        }}
      >
        <Link href={DASHBOARD_PAGE}>
          <Button variant="primary">Finalizar</Button>
        </Link>
      </div>
    </S.Container>
  );
}
