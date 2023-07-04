/* eslint-disable no-case-declarations */
import { useRef, useState } from 'react';
import dayjs from 'dayjs';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import ReactPaginate from 'react-paginate';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useTheme } from 'styled-components';

import { DatePicker } from '@mui/x-date-pickers';

import { useRouter } from 'next/router';

import { Select } from 'components/Select';

import { VISAIcon } from 'components/Illustrations/Visa';

import { MasterCardIcon } from 'components/Illustrations/MasterCard';

import AmericanExpressIcon from 'components/Illustrations/AmericanExpress';

import EloIcon from 'components/Illustrations/Elo';

import { DashboardLayout } from 'layouts/DashboardLayout';

import { useGetEstablishment } from 'hooks/dashboard-pos/useGetEstablishment';

import { formatPrice } from 'utils/formatters/formatPrice';

import { useSidebarStore } from 'store/sidebar';

import { useSalesFilter } from 'hooks/dashboard-pos/useSalesFilter';

import { formatDate } from 'utils/formatters/formatDate';

import VISAEletronIcon from 'components/Illustrations/VisaEletron';

import MasterCardMaestroIcon from 'components/Illustrations/MasterCardMaestro';

import { DASHBOARD_PAGE } from 'constants/routesPath';

import { Loader } from 'components/Loader';

import DraggableScrollContainer from './DraggableScrollContainer';
import { PaymentMethodPieChart } from './PaymentMethodPieChart';
import { SalesByClientPieChart } from './SalesByClientPieChart';
import { OverallSalesProgressionBarChart } from './OverallSalesProgressionBarChart';
import * as S from './styles';

export function DashboardPos() {
  const { colors } = useTheme();
  const formRef = useRef<FormHandles>(null);
  const [filter, setFilter] = useState<string>('período');
  const [inicialDate, setInicialDate] = useState<Date>();
  const [finalDate, setFinalDate] = useState<Date>();
  const { data, isLoading } = useGetEstablishment();
  const router = useRouter();

  if (!data && !isLoading) router.push(DASHBOARD_PAGE);

  const {
    data: sales,
    onPageChange,
    totalPages,
  } = useSalesFilter({
    itemsPerPage: 5,
    endDate: dayjs(finalDate).format('YYYY-MM-DD[T23:59:00]'),
    startDate: dayjs(inicialDate).format('YYYY-MM-DD[T00:00:00]'),
  });

  const isSideBarExpanded = useSidebarStore(state => state.isExpanded);
  const handleSelect = (option: string) => {
    const today = new Date();
    switch (option) {
      case 'Hoje':
        setInicialDate(today);
        setFinalDate(today);
        break;
      case 'Ontem':
        const yesterday = dayjs(today).subtract(1, 'day').toDate();
        setInicialDate(yesterday);
        setFinalDate(yesterday);
        break;
      case 'Essa semana':
        const startOfWeek = dayjs(today).startOf('week').add(1, 'day').toDate();
        const endOfWeek = dayjs(today).endOf('week').add(1, 'day').toDate();
        setInicialDate(startOfWeek);
        setFinalDate(endOfWeek);
        break;
      case 'Semana passada':
        const startOfLastWeek = dayjs(today)
          .subtract(1, 'week')
          .startOf('week')
          .add(1, 'day')
          .toDate();
        const endOfLastWeek = dayjs(today)
          .subtract(1, 'week')
          .endOf('week')
          .add(1, 'day')
          .toDate();
        setInicialDate(startOfLastWeek);
        setFinalDate(endOfLastWeek);
        break;
      case 'Mês passado':
        const startOfLastMonth = dayjs(today)
          .subtract(1, 'month')
          .startOf('month')
          .toDate();
        const endOfLastMonth = dayjs(today)
          .subtract(1, 'month')
          .endOf('month')
          .toDate();
        setInicialDate(startOfLastMonth);
        setFinalDate(endOfLastMonth);
        break;
      case 'Até um ano':
        const oneYearAgo = dayjs(today).subtract(1, 'year').toDate();
        setInicialDate(oneYearAgo);
        setFinalDate(today);
        break;
      default:
        setInicialDate(today);
        setFinalDate(today);
        break;
    }
  };

  const handleFilterDate = () => {
    setInicialDate(undefined);
    setFinalDate(undefined);
    setFilter('especifica');
  };

  const cardsBrandsMap: { [key: string]: JSX.Element } = {
    VISA: <VISAIcon width="37.16px" height="12px" />,
    VISA_ELECTRON: <VISAEletronIcon width="38px" height="40px" />,
    MASTER: <MasterCardIcon width="25.89px" height="16px" />,
    MASTER_MAESTRO: <MasterCardMaestroIcon width="30px" height="20px" />,
    ELO: <EloIcon width="41.76px" height="16px" />,
    AMERICAN_EXPRESS: <AmericanExpressIcon width="16px" height="16px" />,
  };

  const isByPeriodFilter = filter === 'período';
  const isBySpecificDate = filter === 'específica';

  return (
    <DashboardLayout maxWidth="1736px">
      {isLoading ? (
        <Loader />
      ) : (
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
                <S.PjName>{data?.corporate_name} -</S.PjName>
                <S.StatePJ state={data?.is_active}>
                  {data?.is_active ? 'Habilitado' : 'Desabilitado'}
                </S.StatePJ>
              </S.DivRow>
            </S.DivColumn>
            <S.DivBalance>
              <S.BalanceTitle>Vendas por período</S.BalanceTitle>
              <S.BalanceValue>
                {formatPrice(
                  data?.total_balance === null || undefined
                    ? '0.0'
                    : String(data?.total_balance),
                )}
              </S.BalanceValue>
            </S.DivBalance>
          </S.DivTop>
          <S.DivCnpj>
            <S.CNPJData>
              {data?.document.length > 14 ? `CNPJ:` : `CPF:`} {data?.document}
            </S.CNPJData>
            <S.Hifen>-</S.Hifen>
            <S.CNPJData>ID: {data?.id}</S.CNPJData>
          </S.DivCnpj>
          <S.DivRow>
            {isByPeriodFilter ? (
              <>
                <S.ButtonUnderline
                  filter={isByPeriodFilter}
                  variant="transparent"
                  onClick={() => setFilter('período')}
                >
                  Filtro por Período
                </S.ButtonUnderline>
                <S.ButtonUnderline
                  filter={isBySpecificDate}
                  variant="transparent"
                  onClick={handleFilterDate}
                >
                  por Data Específica
                </S.ButtonUnderline>
              </>
            ) : (
              <>
                <S.ButtonUnderline
                  filter={isBySpecificDate}
                  variant="transparent"
                  onClick={handleFilterDate}
                >
                  Filtro por Data Específica
                </S.ButtonUnderline>
                <S.ButtonUnderline
                  filter={isByPeriodFilter}
                  variant="transparent"
                  onClick={() => setFilter('período')}
                >
                  por Período
                </S.ButtonUnderline>
              </>
            )}
          </S.DivRow>

          {filter === 'período' && (
            <div style={{ maxWidth: '424px' }}>
              <Select
                name="filtro"
                placeholder="Selecione uma opção"
                options={[
                  { value: 'Hoje', label: 'Hoje' },
                  { value: 'Ontem', label: 'Ontem' },
                  { value: 'Essa semana', label: 'Essa semana' },
                  { value: 'Semana passada', label: 'Semana passada' },
                  { value: 'Mês passado', label: 'Mês passado' },
                  { value: 'Até um ano', label: 'Até um ano' },
                ]}
                defaultValue="Hoje"
                onChange={event => handleSelect(event.target.value)}
              />
            </div>
          )}
          {filter === 'especifica' && (
            <S.ContainerDatePicker>
              <DatePicker
                label="Data Inicial"
                value={inicialDate}
                onChange={newValue => setInicialDate(newValue)}
              />
              <DatePicker
                label="Data Final"
                value={finalDate}
                onChange={newValue => setFinalDate(newValue)}
              />
            </S.ContainerDatePicker>
          )}

          <S.DivGraphics isSideBarExpanded={isSideBarExpanded}>
            <PaymentMethodPieChart payment_method={sales?.payment_method} />
            <SalesByClientPieChart sales_by_client={sales?.sales_by_client} />
            <OverallSalesProgressionBarChart />
          </S.DivGraphics>
          <S.ContentRow isExpanded={isSideBarExpanded}>
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
                  {sales?.transactions.map(transaction => (
                    <S.TableRow key={transaction.id}>
                      <S.Date>{formatDate(transaction.created_at)}</S.Date>
                      <S.ID>{transaction.id}</S.ID>
                      <S.TableColumn>
                        <S.StatusTrans>
                          {transaction.status === 'APPROVED'
                            ? 'Aprovada'
                            : 'Recusada'}
                        </S.StatusTrans>
                      </S.TableColumn>
                      <S.TableColumn2>
                        <S.Font14>{transaction.card_brand}</S.Font14>
                        <S.FontGray400>
                          {transaction.payment_method === 'CREDIT'
                            ? `Créd. ${
                                transaction.installments > 1
                                  ? 'parcelado'
                                  : 'à vista'
                              } - ${transaction.installments}x`
                            : 'Débito'}
                        </S.FontGray400>
                      </S.TableColumn2>
                      <S.TableColumn3>
                        <S.Font14>
                          {formatPrice(transaction.total_amount.toString())}
                        </S.Font14>
                        <S.FontGray400>
                          {transaction.installments > 1
                            ? `Parc -${formatPrice(
                                String(
                                  Number(transaction.total_amount) /
                                    transaction.installments,
                                ),
                              )}`
                            : ''}{' '}
                        </S.FontGray400>
                      </S.TableColumn3>
                    </S.TableRow>
                  ))}
                  <S.PaginationContainer>
                    {totalPages > 1 && (
                      <ReactPaginate
                        breakLabel="..."
                        nextLabel={
                          <IoIosArrowForward
                            size={20}
                            color={colors.mediumslateBlue}
                          />
                        }
                        onPageChange={onPageChange}
                        pageCount={totalPages}
                        previousLabel={
                          <IoIosArrowBack
                            size={20}
                            color={colors.mediumslateBlue}
                          />
                        }
                        containerClassName="paginationContainer"
                        pageLinkClassName="pageLink"
                        activeLinkClassName="activeLink"
                      />
                    )}
                  </S.PaginationContainer>
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
                {sales?.card_brand.map((brand, index) => (
                  <S.ContentCards key={brand.brand}>
                    <S.TableFlagRow>
                      {index + 1} {cardsBrandsMap[brand.brand]}
                    </S.TableFlagRow>
                    <S.TableColumn4>
                      <S.Font14>
                        {formatPrice(brand.transactions.totalAmount.toString())}
                      </S.Font14>
                      <S.FontGray400>
                        {brand.transactions.totalSales} Vendas
                      </S.FontGray400>
                    </S.TableColumn4>
                  </S.ContentCards>
                ))}
              </S.TableFlag>
            </S.ContainerFlag>
          </S.ContentRow>
        </S.Container>
      )}
    </DashboardLayout>
  );
}
