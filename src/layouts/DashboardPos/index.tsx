/* eslint-disable no-case-declarations */
import { useMediaQuery } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { FaRegCreditCard } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ReactPaginate from 'react-paginate';
import { useTheme } from 'styled-components';

import { v4 } from 'uuid';

import { Loader } from 'components/Loader';
import { Select } from 'components/Select';
import { DASHBOARD_PAGE } from 'constants/routesPath';
import { useGetEstablishment } from 'hooks/dashboard-pos/useGetEstablishment';
import { useSalesFilter } from 'hooks/dashboard-pos/useSalesFilter';
import { DashboardLayout } from 'layouts/DashboardLayout';
import { useSidebarStore } from 'store/sidebar';
import { formatDate } from 'utils/formatters/formatDate';
import { formatPrice } from 'utils/formatters/formatPrice';
import { AgiplanIcon } from 'components/Illustrations/Agiplan';
import { AmericanExpressIcon } from 'components/Illustrations/AmericanExpress';
import { AuraIcon } from 'components/Illustrations/Aura';
import { BanesCardIcon } from 'components/Illustrations/BanesCard';
import { BanriComprasIcon } from 'components/Illustrations/BanriCompras';
import { CabalIcon } from 'components/Illustrations/Cabal';
import { CredSystemIcon } from 'components/Illustrations/CredSystem';
import { DinersClubIcon } from 'components/Illustrations/DinersClub';
import { DiscoverIcon } from 'components/Illustrations/Discover';
import { EloIcon } from 'components/Illustrations/Elo';
import { HiperCardIcon } from 'components/Illustrations/HiperCard';
import { JCBIcon } from 'components/Illustrations/JCB';
import { MasterCardIcon } from 'components/Illustrations/MasterCard';
import { MasterCardMaestroIcon } from 'components/Illustrations/MasterCardMaestro';
import { SorocredIcon } from 'components/Illustrations/Sorocred';
import { VISAIcon } from 'components/Illustrations/Visa';
import { VISAEletronIcon } from 'components/Illustrations/VisaEletron';
import { CredzIcon } from 'components/Illustrations/Credz';

import { OverallSalesProgressionBarChart } from './OverallSalesProgressionBarChart';
import { PaymentMethodPieChart } from './PaymentMethodPieChart';
import { SalesByClientPieChart } from './SalesByClientPieChart';
import * as S from './styles';

const cardsBrandsMap: { [key: string]: JSX.Element } = {
  VISA: <VISAIcon width="37.16px" height="12px" />,
  VISA_ELECTRON: <VISAEletronIcon width="38px" height="40px" />,
  MASTERCARD: <MasterCardIcon width="25.89px" height="16px" />,
  MAESTRO: <MasterCardMaestroIcon width="30px" height="20px" />,
  ELO: <EloIcon width="41.76px" height="16px" />,
  AMERICAN_EXPRESS: <AmericanExpressIcon width="16px" height="16px" />,
  HIPER_CARD: <HiperCardIcon width="32px" height="32px" />,
  BANRI_COMPRAS: <BanriComprasIcon width="32px" height="32px" />,
  CABAL: <CabalIcon width="32px" height="32px" />,
  JCB: <JCBIcon width="42px" height="32px" />,
  CRED_SYSTEM: <CredSystemIcon width="100px" height="32px" />,
  DINERS_CLUB: <DinersClubIcon width="100px" height="32px" />,
  DISCOVER: <DiscoverIcon width="60px" height="42px" />,
  AURA: <AuraIcon width="48px" height="38px" />,
  AGIPLAN: <AgiplanIcon width="48px" height="38px" />,
  SOROCRED: <SorocredIcon width="48px" height="48px" />,
  BANES_CARD: <BanesCardIcon width="50px" height="35px" />,
  CREDZ: <CredzIcon width="60px" height="35px" />,
};

export function DashboardPos() {
  const { colors } = useTheme();
  const formRef = useRef<FormHandles>(null);
  const [filter, setFilter] = useState<string>('período');
  const [inicialDate, setInicialDate] = useState<Date>();
  const [finalDate, setFinalDate] = useState<Date>();
  const { data, isLoading } = useGetEstablishment();
  const router = useRouter();

  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');

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

  const isByPeriodFilter = filter === 'período';
  const isBySpecificDate = filter === 'específica';

  const totalAmountBrandSales = sales?.card_brand.reduce(
    (accumulator, brand) => accumulator + brand.transactions.totalAmount,
    0,
  );

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
          </S.DivTop>
          <S.DivCnpj>
            <S.CNPJData>
              {data?.document.length > 14 ? `CNPJ:` : `CPF:`} {data?.document}
            </S.CNPJData>
            <S.Hifen>-</S.Hifen>
            <S.CNPJData>ID: {data?.id}</S.CNPJData>
          </S.DivCnpj>
          <S.DivBalance>
            <S.BalanceTitle>Vendas por período</S.BalanceTitle>
            <S.BalanceValue>
              {formatPrice(
                sales?.salesPerPeriod === null || undefined
                  ? '0.0'
                  : String(sales?.salesPerPeriod),
              )}
            </S.BalanceValue>
          </S.DivBalance>
          <S.DivRow>
            {isByPeriodFilter ? (
              <>
                <S.ButtonUnderline
                  filter={isByPeriodFilter ? 1 : 0}
                  variant="transparent"
                  onClick={() => setFilter('período')}
                >
                  Filtro por Período
                </S.ButtonUnderline>
                <S.ButtonUnderline
                  filter={isBySpecificDate ? 1 : 0}
                  variant="transparent"
                  onClick={handleFilterDate}
                >
                  por Data Específica
                </S.ButtonUnderline>
              </>
            ) : (
              <>
                <S.ButtonUnderline
                  filter={isBySpecificDate ? 1 : 0}
                  variant="transparent"
                  onClick={handleFilterDate}
                >
                  Filtro por Data Específica
                </S.ButtonUnderline>
                <S.ButtonUnderline
                  filter={isByPeriodFilter ? 1 : 0}
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
            <S.ContainerTable>
              <S.TopTable>
                <S.TopParams>Data</S.TopParams>
                {!isSmallDevice && <S.TopParams1>ID da transação</S.TopParams1>}
                <S.TopParams2>Status</S.TopParams2>
                <S.TopParams3>Tipo</S.TopParams3>
                <S.TopParams4>Valor</S.TopParams4>
              </S.TopTable>
              <S.Table>
                {sales?.transactions.length === 0 && (
                  <S.TableRow>
                    <S.Font14>Nenhuma transação</S.Font14>
                  </S.TableRow>
                )}
                {sales?.transactions.map(transaction => (
                  <S.TableRow key={transaction.id}>
                    <S.Date>{formatDate(transaction.created_at)}</S.Date>
                    {!isSmallDevice && <S.ID>{transaction.id}</S.ID>}
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
                </S.PaginationContainer>
              </S.Table>
            </S.ContainerTable>
            <S.ContainerFlag>
              <S.TopTableSealsByFlag>
                <S.TitleSealsByFlag>
                  Maior volume de <span>vendas por bandeira</span>
                </S.TitleSealsByFlag>
                <S.PaymentMethodLabel>Formas de pagamento</S.PaymentMethodLabel>
                <S.ValueFlag>Valor</S.ValueFlag>
              </S.TopTableSealsByFlag>
              <S.TableFlag>
                {sales?.card_brand.map(brand => {
                  if (brand.transactions.totalAmount === 0) return;
                  const key = v4();
                  return (
                    <S.ContentCards key={key}>
                      <S.TableFlagRow>
                        {cardsBrandsMap[brand.brand] ? (
                          cardsBrandsMap[brand.brand]
                        ) : (
                          <FaRegCreditCard
                            size={32}
                            color={colors.mediumslateBlue}
                          />
                        )}
                      </S.TableFlagRow>
                      <S.TableColumn4>
                        <strong>
                          {brand.payment_method === 'DEBIT'
                            ? 'Débito'
                            : 'Crédito'}
                        </strong>
                      </S.TableColumn4>
                      <S.TableColumn4>
                        <S.Font14>
                          {formatPrice(
                            brand.transactions.totalAmount.toString(),
                          )}
                        </S.Font14>
                        <S.FontGray400>
                          {brand.transactions.totalSales} Vendas
                        </S.FontGray400>
                      </S.TableColumn4>
                    </S.ContentCards>
                  );
                })}
                {totalAmountBrandSales === 0 && (
                  <div style={{ margin: '0 auto' }}>Nenhuma venda</div>
                )}
              </S.TableFlag>
            </S.ContainerFlag>
          </S.ContentRow>
        </S.Container>
      )}
    </DashboardLayout>
  );
}
