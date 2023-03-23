import { useState } from 'react';
import { MdOutlineAttachMoney } from 'react-icons/md';

import { BarChart } from '../BarChart';
import { BarChart2 } from '../BarChart2';

import { LineChart } from '../LineChart';
import { PieChart } from '../PieChart';
import { StyledPieChart } from '../StyledPieChart';

import * as S from './styles';

export function Main() {
  const [underline, setUnderline] = useState('Geral');
  return (
    <S.Container>
      <S.Head>
        <S.TitleAdm>Olá, Administrador</S.TitleAdm>
        <S.DivRow>
          <S.ButtonUnderline
            underline={underline === 'Geral'}
            variant="transparent"
            onClick={() => setUnderline('Geral')}
          >
            Visão Geral
          </S.ButtonUnderline>
          <S.ButtonUnderline
            underline={underline === 'Vendas'}
            variant="transparent"
            onClick={() => setUnderline('Vendas')}
          >
            Vendas
          </S.ButtonUnderline>
        </S.DivRow>
      </S.Head>

      <S.Balance>
        <S.RowContent>
          <S.ContentBalance>
            <S.TitleBalance>
              {' '}
              <MdOutlineAttachMoney size={19.87} />
              Faturamento Quantum
            </S.TitleBalance>
            <S.ValueBalance>R$ 1.200.000,00</S.ValueBalance>
          </S.ContentBalance>
          <S.ContentBalance>
            <S.TitleBalance>
              {' '}
              <MdOutlineAttachMoney size={19.87} />
              Faturamento Diário
            </S.TitleBalance>
            <S.ValueBalance>R$ 1.200.000,00</S.ValueBalance>
          </S.ContentBalance>
        </S.RowContent>
        <S.RowContent>
          <S.ContentBalance>
            <S.TitleBalance>
              {' '}
              <MdOutlineAttachMoney size={19.87} />
              Repasse ao cliente
            </S.TitleBalance>
            <S.ValueBalance>R$ 1.200.000,00</S.ValueBalance>
          </S.ContentBalance>
          <S.ContentBalance>
            <S.TitleBalance>
              {' '}
              <MdOutlineAttachMoney size={19.87} />
              Total de cliente
            </S.TitleBalance>
            <S.ValueBalance>1.229 Clientes</S.ValueBalance>
          </S.ContentBalance>
        </S.RowContent>
      </S.Balance>
      <LineChart />
      <PieChart />
      <StyledPieChart />
      <BarChart />
      <BarChart2 />
    </S.Container>
  );
}
