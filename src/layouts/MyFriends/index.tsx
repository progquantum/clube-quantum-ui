import ReactPaginate from 'react-paginate';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiUserStarLine } from 'react-icons/ri';
import { BsFillPersonPlusFill } from 'react-icons/bs';

import { formatCashback } from 'utils/formatters/formatCashback';
import { formatDate } from 'utils/formatters/formatDate';

import { useFriends } from 'hooks/useFriends';
import { useIndirectFriends } from 'hooks/useIndirectFriends';
import { useMe } from 'hooks/user/useMe';

import { Loader } from 'components/Loader';
import { getUserImagePlaceholder } from 'components/Avatar/utils';
import { InviteFriends } from 'components/InviteFriends';
import { NoFriends } from 'components/NoFriends';

import { DashboardLayout } from 'layouts/DashboardLayout';

import { colors } from 'styles/theme/colors';

import * as S from './styles';

export function MyFriendsPage() {
  const { data, onPageChange, isError, loading } = useFriends();
  const { data: indirectFriends, isLoading } = useIndirectFriends();
  const { data: user } = useMe();

  const totalPages = data?.totalPages;
  const hasPlan = user?.subscription?.is_active;
  const hasFriends = data?.friends.length > 0;

  if (!hasFriends && isError && !hasPlan) {
    return <NoFriends />;
  }

  return (
    <DashboardLayout>
      {isLoading && loading ? (
        <Loader />
      ) : (
        <S.CardsContainer>
          <S.CardFriends>
            <S.CardTitle>
              <RiUserStarLine size={16} /> Amigos
            </S.CardTitle>
            {data?.friends.map(friend => (
              <S.Friend key={friend.id}>
                <S.TitleFriends>
                  <S.Image
                    src={
                      friend.avatar_url?.length
                        ? friend.avatar_url
                        : getUserImagePlaceholder(friend.name)
                    }
                    alt=""
                  />
                  <div>
                    <h5>{friend.name}</h5>
                    {friend.inactivated_at !== null ? (
                      <span>
                        Inativo(a) desde {formatDate(friend.inactivated_at)}
                      </span>
                    ) : (
                      <div>
                        {friend.cashback !== 0 ? (
                          <S.Cashback>
                            {formatCashback(friend.cashback)}
                          </S.Cashback>
                        ) : (
                          <S.NoCashback>R$ 0,00</S.NoCashback>
                        )}
                      </div>
                    )}
                  </div>
                </S.TitleFriends>
                <S.AmountFriends>
                  <BsFillPersonPlusFill size={16} />
                  <p>{friend.amountFriends}</p>
                </S.AmountFriends>
              </S.Friend>
            ))}
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
          </S.CardFriends>

          <S.FlexCards>
            <S.IndirectFriends>
              <S.CardTitle>
                <RiUserStarLine size={16} /> Ganhos por indicações indiretas
              </S.CardTitle>

              <S.TotalFriends>
                <p>Suas conexões indiretas</p>
                <span>
                  {indirectFriends?.indirectFriendsAmount}/
                  {indirectFriends?.indirectFriendsLimitAmount}
                </span>
              </S.TotalFriends>

              <progress
                value={indirectFriends?.indirectFriendsAmount}
                max={indirectFriends?.indirectFriendsLimitAmount}
              />

              <S.TotalFriends>
                <p>
                  Seu ganho com conexões <br /> indiretas esse mês foi de:
                </p>
                <span>
                  {formatCashback(
                    indirectFriends?.totalCashbackThisMonthByIndirectFriends,
                  )}
                </span>
              </S.TotalFriends>
            </S.IndirectFriends>

            <S.IndirectFriends>
              <S.CardTitle>
                <RiUserStarLine size={16} /> Ganhos por indicações indiretas
              </S.CardTitle>
              <S.GraphicBar>
                <S.BarItem>
                  <S.Bar percentage={100} />
                  <S.TitleBar>Jan</S.TitleBar>
                </S.BarItem>
                <S.BarItem>
                  <S.Bar percentage={50} />
                  <S.TitleBar>Fev</S.TitleBar>
                </S.BarItem>
                <S.BarItem>
                  <S.Bar percentage={70} />
                  <S.TitleBar>Mar</S.TitleBar>
                </S.BarItem>
                <S.BarItem>
                  <S.Bar percentage={40} />
                  <S.TitleBar>Abr</S.TitleBar>
                </S.BarItem>
                <S.BarItem>
                  <S.Bar percentage={40} />
                  <S.TitleBar>Mai</S.TitleBar>
                </S.BarItem>
                <S.BarItem>
                  <S.Bar percentage={80} />
                  <S.TitleBar>Jun</S.TitleBar>
                </S.BarItem>
                <S.BarItem>
                  <S.Bar percentage={90} />
                  <S.TitleBar>Jul</S.TitleBar>
                </S.BarItem>
                <S.BarItem>
                  <S.Bar percentage={49} />
                  <S.TitleBar>Ago</S.TitleBar>
                </S.BarItem>
                <S.BarItem>
                  <S.Bar percentage={100} />
                  <S.TitleBar>Set</S.TitleBar>
                </S.BarItem>
                <S.BarItem>
                  <S.Bar percentage={38} />
                  <S.TitleBar>Out</S.TitleBar>
                </S.BarItem>
                <S.BarItem>
                  <S.Bar percentage={73} />
                  <S.TitleBar>Nov</S.TitleBar>
                </S.BarItem>
                <S.BarItem>
                  <S.Bar percentage={87} />
                  <S.TitleBar>Dez</S.TitleBar>
                </S.BarItem>
              </S.GraphicBar>
            </S.IndirectFriends>
            <InviteFriends variant="white" />
          </S.FlexCards>
        </S.CardsContainer>
      )}
    </DashboardLayout>
  );
}
