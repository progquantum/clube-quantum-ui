import { useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Select } from 'components/Select';

import { VISAIcon } from 'components/Illustrations/Visa';

import { MasterCardIcon } from 'components/Illustrations/MasterCard';

import AmericanExpressIcon from 'components/Illustrations/AmericanExpress';

import EloIcon from 'components/Illustrations/Elo';

import * as S from './styles';
import { PieChart } from './PieChart';
import { BarChart } from './BarChart';
import { PieChartSales } from './PieChartSales';
import { DashboardLayout } from './DashboardLayout';
import DraggableScrollContainer from './DraggableScrollContainer';

export function DashboardPos() {
  const formRef = useRef<FormHandles>(null);
  const [underline, setUnderline] = useState('Geral');

  const handleSelect = () => {
    console.log('Select');
  };
  return (
    <DashboardLayout>
      <S.Container
        as={Form}
        ref={formRef}
        onSubmit={handleSelect}
        className="form"
      >
        <S.DivTop>
          <S.DivColumn>
            <S.Title>Você está no estabelecimento</S.Title>
            <S.DivRow>
              <S.PjName>Mercearia Pão de Ló -</S.PjName>
              <S.StatePJ>Habilitado</S.StatePJ>
            </S.DivRow>
          </S.DivColumn>
          <S.DivBalance>
            <S.BalanceTitle>Saldo atual</S.BalanceTitle>
            <S.BalanceValue>R$ 1.200,00</S.BalanceValue>
          </S.DivBalance>
        </S.DivTop>
        <S.DivCnpj>
          <S.CNPJData>CNPJ: 17.218.098/0001-50</S.CNPJData>
          <S.Hifen>-</S.Hifen>
          <S.CNPJData>
            ID: 0182SD3082qeq2177918929281718990ww10123qc1
          </S.CNPJData>
        </S.DivCnpj>

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
        <div style={{ maxWidth: '424px' }}>
          <Select
            name="filtro"
            label="Filtro"
            placeholder="Selecione uma opção"
            options={[
              { value: 'Hoje', label: 'Hoje' },
              { value: 'Ontem', label: 'Ontem' },
              { value: 'Essa semana', label: 'Essa semana' },
              { value: 'Semana passada', label: 'Semana passada' },
              { value: 'Mês passado', label: 'Mês passado' },
              { value: 'Até um ano', label: 'Até um ano' },
            ]}
          />
        </div>

        <S.DivGraphics>
          <S.DivPie>
            <PieChart />
            <PieChartSales />
          </S.DivPie>
          <BarChart />
        </S.DivGraphics>
        <S.ContentRow>
          <DraggableScrollContainer>
            <S.ContainerTable>
              <S.TopTable>
                <S.TopParams>Data</S.TopParams>
                <S.TopParams1>ID da transação</S.TopParams1>
                <S.TopParams2>Status</S.TopParams2>
                <S.TopParams3>Tipo</S.TopParams3>
                <S.TopParams4>Valor</S.TopParams4>
              </S.TopTable>
              <S.Table>
                <S.TableRow>
                  <S.Date>12/05/2022</S.Date>
                  <S.ID>0182SD3082qeq2177918929281718990ww10123qc1</S.ID>
                  <S.TableColumn>
                    <S.StatusTrans>Aprovada</S.StatusTrans>
                    <S.Font14>João Augusto de Lima</S.Font14>
                    <S.FontGray400>CPF: 981.238.109-25</S.FontGray400>
                  </S.TableColumn>
                  <S.TableColumn2>
                    <S.Font14>VISA</S.Font14>
                    <S.FontGray400>Créd. parcelado - 5x</S.FontGray400>
                  </S.TableColumn2>
                  <S.TableColumn3>
                    <S.Font14>R$ 230,00</S.Font14>
                    <S.FontGray400>Parc. - R$ 57,50</S.FontGray400>
                  </S.TableColumn3>
                </S.TableRow>
                <S.TableRow>
                  <S.Date>12/05/2022</S.Date>
                  <S.ID>0182SD3082qeq2177918929281718990ww10123qc1</S.ID>
                  <S.TableColumn>
                    <S.StatusTrans>Aprovada</S.StatusTrans>
                    <S.Font14>João Augusto de Lima</S.Font14>
                    <S.FontGray400>CPF: 981.238.109-25</S.FontGray400>
                  </S.TableColumn>
                  <S.TableColumn2>
                    <S.Font14>VISA</S.Font14>
                    <S.FontGray400>Créd. parcelado - 5x</S.FontGray400>
                  </S.TableColumn2>
                  <S.TableColumn3>
                    <S.Font14>R$ 230,00</S.Font14>
                    <S.FontGray400>Parc. - R$ 57,50</S.FontGray400>
                  </S.TableColumn3>
                </S.TableRow>
                <S.TableRow>
                  <S.Date>12/05/2022</S.Date>
                  <S.ID>0182SD3082qeq2177918929281718990ww10123qc1</S.ID>
                  <S.TableColumn>
                    <S.StatusTrans>Aprovada</S.StatusTrans>
                    <S.Font14>João Augusto de Lima</S.Font14>
                    <S.FontGray400>CPF: 981.238.109-25</S.FontGray400>
                  </S.TableColumn>
                  <S.TableColumn2>
                    <S.Font14>VISA</S.Font14>
                    <S.FontGray400>Créd. parcelado - 5x</S.FontGray400>
                  </S.TableColumn2>
                  <S.TableColumn3>
                    <S.Font14>R$ 230,00</S.Font14>
                    <S.FontGray400>Parc. - R$ 57,50</S.FontGray400>
                  </S.TableColumn3>
                </S.TableRow>
              </S.Table>
            </S.ContainerTable>
          </DraggableScrollContainer>
          <S.ContainerFlag>
            <S.TopTableSealsByFlag>
              <div
                style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
              >
                <S.TitleSealsByFlag>Maior volume de</S.TitleSealsByFlag>
                <S.SubTitleSealsByFlag>
                  vendas por bandeira
                </S.SubTitleSealsByFlag>
              </div>
              <S.ValueFlag>Valor</S.ValueFlag>
            </S.TopTableSealsByFlag>
            <S.TableFlag>
              <S.ContentCards>
                <S.TableFlagRow>
                  1 <VISAIcon width="37.16px" height="12px" />
                </S.TableFlagRow>
                <S.TableColumn4>
                  <S.Font14>R$ 230,00</S.Font14>
                  <S.FontGray400>10 Vendas - 50%</S.FontGray400>
                </S.TableColumn4>
              </S.ContentCards>
              <S.ContentCards>
                <S.TableFlagRow>
                  2 <MasterCardIcon width="25.89px" height="16px" />
                </S.TableFlagRow>
                <S.TableColumn4>
                  <S.Font14>R$ 230,00</S.Font14>
                  <S.FontGray400>10 Vendas - 50%</S.FontGray400>
                </S.TableColumn4>
              </S.ContentCards>
              <S.ContentCards>
                <S.TableFlagRow>
                  3 <EloIcon width="41.76px" height="16px" />
                </S.TableFlagRow>
                <S.TableColumn4>
                  <S.Font14>R$ 230,00</S.Font14>
                  <S.FontGray400>10 Vendas - 50%</S.FontGray400>
                </S.TableColumn4>
              </S.ContentCards>
              <S.ContentCards>
                <S.TableFlagRow>
                  4 <AmericanExpressIcon width="16px" height="16px" />
                </S.TableFlagRow>
                <S.TableColumn4>
                  <S.Font14>R$ 230,00</S.Font14>
                  <S.FontGray400>10 Vendas - 50%</S.FontGray400>
                </S.TableColumn4>
              </S.ContentCards>
            </S.TableFlag>
          </S.ContainerFlag>
        </S.ContentRow>
      </S.Container>
    </DashboardLayout>
  );
}
