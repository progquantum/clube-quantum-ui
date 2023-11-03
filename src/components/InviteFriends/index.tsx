import { BsPersonBadge } from 'react-icons/bs';

import { useMe } from 'hooks/me/useMe';
import { formatSepareteNumbers } from 'utils/formatters/formatSepareteNumbers';
import { useGetInviteLink } from 'hooks/me/useInviteLink';
import { Loader } from 'components/Loader';

import * as S from './styles';
import { InviteLink } from './InviteLInk';

export function InviteFriends() {
  const {
    data: { invites_accepted },
  } = useMe();
  const { data: invite, isLoading } = useGetInviteLink();

  const [totalFriends, limite] = formatSepareteNumbers(invites_accepted);

  const isLimitReached =
    totalFriends > 0 && limite > 0 && totalFriends === limite;

  return (
    <S.DivInviteFriends variant={isLimitReached ? 'limitReached' : ''}>
      <S.HeaderInviteFriends>
        <BsPersonBadge />
        <S.TitleFriends>Convidar amigos</S.TitleFriends>
      </S.HeaderInviteFriends>
      {isLoading ? (
        <Loader />
      ) : (
        <InviteLink
          invite={invite}
          limite={limite}
          totalFriends={totalFriends}
        />
      )}
    </S.DivInviteFriends>
  );
}
