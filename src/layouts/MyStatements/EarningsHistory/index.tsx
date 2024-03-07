import { BsFillPersonFill, BsPersonBadge } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ReactPaginate from 'react-paginate';
import { useTheme } from 'styled-components';
import { uuid } from 'uuidv4';

import { useSearchParams } from 'next/navigation';

import Skeleton from 'react-loading-skeleton';

import { Loader } from 'components/Loader';

import { formatDateToDDMMYYYY } from 'utils/formatters/formatDateToDDMMYYYY';

import { Props } from './types';
import * as S from './styles';

export function EarningsHistory({
  loading,
  data,
  onPageChange,
  isFetching,
}: Props) {
  const { colors } = useTheme();
  const totalPages = data?.info.totalPages;

  const totalAmount = data && data.totalAmount ? data.totalAmount : 0;

  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const showWhenComplete = (value?: string, width = '100%') => {
    if (isFetching) {
      return <Skeleton style={{ width }} />;
    }

    return value;
  };

  return (
    <S.EarningsHistoryByIndication>
      <S.TitleContainer>
        <BsPersonBadge size={30} />
        <span>Seu histórico de Ganhos por Parceiro/Bônus indicação</span>
      </S.TitleContainer>
      <S.EarningsHistorySubtitle>
        Saldo de ganhos por parceiros/bônus por indicação
      </S.EarningsHistorySubtitle>
      {loading ? (
        <div style={{ minWidth: '393px', height: '' }}>
          <Loader />
        </div>
      ) : (
        <>
          <S.TotalEarningText>
            {showWhenComplete(totalAmount.toString(), '20%')}
          </S.TotalEarningText>
          <S.PartnerContainer>
            {data?.commissions?.length === 0 && (
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Sem histórico para esse período
              </div>
            )}
            {data?.commissions?.map(extract => (
              <S.PartnerRow key={uuid()}>
                <S.IconBox>
                  <BsFillPersonFill size={20} />
                </S.IconBox>
                <S.PartnerColumn>
                  <S.PartnerName>
                    {showWhenComplete(extract.cashback_name, '70%')}
                  </S.PartnerName>
                  <S.EarningDate>
                    {showWhenComplete(
                      formatDateToDDMMYYYY(extract.created_at),
                      '20%',
                    )}
                  </S.EarningDate>
                </S.PartnerColumn>
                <S.QuantityGainedText>{extract.amount}</S.QuantityGainedText>
              </S.PartnerRow>
            ))}
          </S.PartnerContainer>
          <S.PaginationContainer>
            {totalPages > 1 && (
              <ReactPaginate
                breakLabel="..."
                nextLabel={
                  <IoIosArrowForward size={20} color={colors.mediumslateBlue} />
                }
                forcePage={Number(page) - 1}
                onPageChange={onPageChange}
                pageCount={totalPages}
                previousLabel={
                  <IoIosArrowBack size={20} color={colors.mediumslateBlue} />
                }
                containerClassName="paginationContainer"
                pageLinkClassName="pageLink"
                activeLinkClassName="activeLink"
              />
            )}
          </S.PaginationContainer>
        </>
      )}
    </S.EarningsHistoryByIndication>
  );
}
