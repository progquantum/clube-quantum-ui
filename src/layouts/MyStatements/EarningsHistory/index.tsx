import { BsFillPersonFill, BsPersonBadge } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ReactPaginate from 'react-paginate';
import { useTheme } from 'styled-components';
import { uuid } from 'uuidv4';

import { Loader } from 'components/Loader';

import { formatPrice } from 'utils/formatters/formatPrice';

import { Props } from './types';

import * as S from './styles';

export function EarningsHistory({ loading, data, onPageChange }: Props) {
  const { colors } = useTheme();
  const totalPages = data?.info.totalPages;

  const totalAmount = data && data.totalAmount ? data.totalAmount : 0;

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
            {formatPrice(String(totalAmount))}
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
                <div>
                  <S.PartnerName>{extract.cashback_name}</S.PartnerName>
                  <S.EarningDate>
                    {new Intl.DateTimeFormat('pt-BR').format(
                      new Date(extract.created_at),
                    )}
                  </S.EarningDate>
                </div>
                <S.QuantityGainedText>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(extract.amount)}
                </S.QuantityGainedText>
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
