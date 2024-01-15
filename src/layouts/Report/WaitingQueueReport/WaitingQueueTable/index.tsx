/* eslint-disable jsx-a11y/label-has-associated-control */
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTheme } from 'styled-components';

import * as S from './styles';

export function WaitingQueueTable() {
  const { colors } = useTheme();
  return (
    <>
      <S.ScrollableContainer>
        <S.Table>
          <thead>
            <S.TableLabelContainer>
              <S.Label>Nome</S.Label>
              <S.Label>CPF</S.Label>
              <S.Label>Data do pedido</S.Label>
              <S.Label>Recebimento de cartão</S.Label>
            </S.TableLabelContainer>
          </thead>
          <S.ContentContainer>
            <S.Content>
              <td>Jose das Nevez</td>
            </S.Content>
            <S.Content>
              <td>000.000.000-00</td>
            </S.Content>
            <S.Content>
              <td>29/03/2023</td>
            </S.Content>
            <S.Content>
              <td>
                <input type="checkbox" id="recebido" />
                <S.CheckboxLabel htmlFor="recebido">Recebido</S.CheckboxLabel>
              </td>
            </S.Content>
          </S.ContentContainer>
        </S.Table>
      </S.ScrollableContainer>
      <S.PaginationContainer>
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <IoIosArrowForward size={20} color={colors.mediumslateBlue} />
          }
          onPageChange={() => console.log('pagina')}
          pageCount={1}
          previousLabel={
            <IoIosArrowBack size={20} color={colors.mediumslateBlue} />
          }
          containerClassName="paginationContainer"
          pageLinkClassName="pageLink"
          activeLinkClassName="activeLink"
        />
      </S.PaginationContainer>
    </>
  );
}
