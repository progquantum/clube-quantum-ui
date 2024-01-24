/* eslint-disable jsx-a11y/label-has-associated-control */
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTheme } from 'styled-components';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { ImBlocked } from 'react-icons/im';
import { GrDeliver } from 'react-icons/gr';
import { MdOutlineCreditCardOff } from 'react-icons/md';

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
              <S.Label>Status</S.Label>
              <S.Label>Ação</S.Label>
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
              <td>Em espera</td>
            </S.Content>
            <S.Content>
              <S.ActionsContainer>
                <td>
                  <GrDeliver
                    size={23}
                    color={colors.midnightBlue}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
                <td>
                  <BsFillPersonCheckFill
                    size={23}
                    color={colors.successDark}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
                <td>
                  <MdOutlineCreditCardOff
                    size={23}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
                <td>
                  <ImBlocked
                    size={23}
                    color={colors.danger}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
              </S.ActionsContainer>
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
