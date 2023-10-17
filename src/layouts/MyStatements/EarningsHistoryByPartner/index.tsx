import { BsCart2, BsPersonBadge } from 'react-icons/bs';

import { useState } from 'react';

import ReactPaginate from 'react-paginate';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useTheme } from 'styled-components';

import { uuid } from 'uuidv4';

import { Loader } from 'components/Loader';
import { formatPrice } from 'utils/formatters/formatPrice';
import { formatTruncateText } from 'utils/formatters/formatTruncateText';
import { formatDate } from 'utils/formatters/formatDate';

import { Props } from './types';
import * as S from './styles';

export function EarningsHistoryByPartner({
  loading,
  data,
  onPageChange,
}: Props) {
  const [seeFullName, setSeeFullName] = useState(null);
  const { colors } = useTheme();

  const totalPages = data?.info.totalPages;
  return (
    <S.EarningsHistoryByPartner>
      <S.TitleContainer>
        <BsPersonBadge size={30} />
        <span>Seu histórico de Ganhos por Parceiro</span>
      </S.TitleContainer>
      <S.EarningsHistorySubtitle>
        Saldo de cashback de compras por parceiro
      </S.EarningsHistorySubtitle>
      {loading ? (
        <div style={{ minWidth: '393px', height: '200px' }}>
          <Loader />
        </div>
      ) : (
        <>
          <S.TotalEarningText>
            {formatPrice(
              data?.totalAmount ? String(data?.totalAmount) : '0,00',
            )}
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
            {data?.commissions?.map((partner, index) => (
              <S.PartnerRow key={uuid()}>
                <S.IconBox>
                  <BsCart2 size={20} />
                </S.IconBox>
                <div>
                  <S.PartnerName
                    style={{ cursor: 'pointer' }}
                    onClick={
                      seeFullName === index
                        ? () => setSeeFullName(null)
                        : () => setSeeFullName(index)
                    }
                  >
                    {seeFullName === index
                      ? partner.cashback_name
                      : formatTruncateText(partner.cashback_name, 34)}
                  </S.PartnerName>
                  <S.EarningDate>
                    {formatDate(partner.created_at)}
                  </S.EarningDate>
                </div>
                <S.QuantityGainedText>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(partner.amount)}
                </S.QuantityGainedText>
              </S.PartnerRow>
            ))}
          </S.PartnerContainer>
          {totalPages > 1 && (
            <S.PaginationContainer>
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
            </S.PaginationContainer>
          )}
        </>
      )}
    </S.EarningsHistoryByPartner>
  );
}
