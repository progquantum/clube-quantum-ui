/* eslint-disable react/no-array-index-key */
/* eslint-disable no-octal */
import ReactPaginate from 'react-paginate';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiUserStarLine } from 'react-icons/ri';
import { BsFillPersonPlusFill, BsPersonBadge } from 'react-icons/bs';

import Link from 'next/link';

import { formatCashback } from 'utils/formatters/formatCashback';
import { formatDate } from 'utils/formatters/formatDate';

import { useFriends } from 'hooks/me/useFriends';
import { useIndirectFriends } from 'hooks/me/useIndirectFriends';
import { useMe } from 'hooks/me/useMe';
import { useIndirectGains } from 'hooks/me/useIndirectGains';

import { Loader } from 'components/Loader';
import { getUserImagePlaceholder } from 'components/Avatar/utils';
import { NoFriends } from 'components/NoFriends';

import { DashboardLayout } from 'layouts/DashboardLayout';
import { colors } from 'styles/theme/colors';

import { INVITE_FRIENDS_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function MyFriendsPage() {
  const { data, onPageChange, isError, loading } = useFriends();
  const { data: indirectFriends, isLoading } = useIndirectFriends();
  const { data: user } = useMe();
  const { data: indirectGains } = useIndirectGains();

  const totalPages = data?.total_pages;
  const hasPlan = user?.subscription?.is_active;
  const hasFriends = data?.friends.length > 0;

  if (!hasFriends || isError || !hasPlan) {
    return <NoFriends />;
  }

  const months = {
    '01': 'Jan',
    '02': 'Fev',
    '03': 'Mar',
    '04': 'Abr',
    '05': 'Mai',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Ago',
    '09': 'Set',
    '10': 'Out',
    '11': 'Nov',
    '12': 'Dez',
  };

  const formattedIndirectGains = indirectGains.map(item => {
    const m = item.date.split('-')[1];

    return {
      total: item.total,
      month: months[m],
    };
  });

  const max = formattedIndirectGains.reduce(
    (a, b) => Math.max(a, b.total),
    -Infinity,
  );

  const graphInformation = formattedIndirectGains.map(item => ({
    total: item.total,
    percentage: ((item.total / max) * 100).toFixed(2),
    month: item.month,
  }));

  return (
    <DashboardLayout>
      {isLoading && loading ? (
        <Loader />
      ) : (
        <S.CardsContainer>
          <S.CardFriends>
            <S.CardTitle>
              <BsPersonBadge size={24} /> Amigos
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
                    alt={friend.name}
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
                  <p>{friend.amount_friends}</p>
                </S.AmountFriends>
              </S.Friend>
            ))}
            {totalPages > 1 && (
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
                    <IoIosArrowBack size={20} color={colors.mediumslateBlue} />
                  }
                  containerClassName="paginationContainer"
                  pageLinkClassName="pageLink"
                  activeLinkClassName="activeLink"
                />
              </S.PaginationContainer>
            )}
          </S.CardFriends>

          <S.FlexCards>
            <S.IndirectFriends>
              <S.CardTitle>
                <BsPersonBadge size={24} /> Ganhos por indicações indiretas
              </S.CardTitle>

              <S.TotalFriends>
                <p>Suas conexões indiretas</p>
                <span>
                  {indirectFriends?.indirect_friends_amount}/
                  {indirectFriends?.indirect_friends_limit_amount}
                </span>
              </S.TotalFriends>

              <progress
                value={indirectFriends?.indirect_friends_amount}
                max={indirectFriends?.indirect_friends_limit_amount}
              />

              <S.TotalFriends>
                <p>
                  Seu ganho com conexões <br /> indiretas esse mês foi de:
                </p>
                <span>
                  {formatCashback(
                    indirectFriends?.total_cashback_this_month_by_indirect_friends,
                  )}
                </span>
              </S.TotalFriends>
            </S.IndirectFriends>

            <S.IndirectFriends>
              <S.CardTitle>
                <BsPersonBadge size={24} /> Ganhos por indicações indiretas
              </S.CardTitle>
              <S.GraphicBar>
                {graphInformation.map((item, index) => (
                  <S.BarItem key={index} title={String(item.total)}>
                    <S.Bar percentage={item.percentage} />
                    <S.TitleBar>{item.month}</S.TitleBar>
                  </S.BarItem>
                ))}
              </S.GraphicBar>
            </S.IndirectFriends>
            <S.InviteFriends>
              <S.CardTitle>
                <BsPersonBadge size={24} /> Convidar amigos
              </S.CardTitle>
              <S.InviteFriendsBody>
                <h4>Não fique sozinho nessa!</h4>
                <p>Convide seus amigos e ganhe cashback junto com eles!!!</p>
                <Link href={INVITE_FRIENDS_PAGE}>
                  <S.InviteFriendsButton>Convidar amigos</S.InviteFriendsButton>
                </Link>
              </S.InviteFriendsBody>
            </S.InviteFriends>
          </S.FlexCards>
        </S.CardsContainer>
      )}
    </DashboardLayout>
  );
}
