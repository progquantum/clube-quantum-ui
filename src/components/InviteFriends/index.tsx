import { BsInstagram, BsPersonBadge } from 'react-icons/bs';

import { FaFacebookF } from 'react-icons/fa';

import { ImWhatsapp } from 'react-icons/im';

import { useMe } from 'hooks/user/useMe';

import { useFriends } from 'hooks/useFriends';

import * as S from './styles';
import { InviteFriendsProps } from './types';

export function InviteFriends({ variant }: InviteFriendsProps) {
  const {
    data: { invite_code },
  } = useMe();
  const { data } = useFriends();

  const totalFriends = (data && data.friends.length) ?? 0;

  const inviteLink = `quantum.com.vc/signup?invite-code=${invite_code}`;

  const handleCopyOnClick = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
    } catch (err: unknown) {
      if (err instanceof Error) {
        return err;
      }
    }
  };

  return (
    <S.DivInviteFriends variant={variant}>
      <S.HeaderInviteFriends>
        <BsPersonBadge />
        <S.TitleFriends>Convidar amigos</S.TitleFriends>
      </S.HeaderInviteFriends>
      <S.TitleInviteFriends>Não fique sozinho nessa!</S.TitleInviteFriends>
      <S.TextInviteFriends>
        Convide seus amigos e ganhe cashback junto com eles!!!
      </S.TextInviteFriends>
      <S.InviteBox onClick={handleCopyOnClick}>
        Seu link de convite é: <S.Bold>{inviteLink}</S.Bold>{' '}
        <span>clique aqui para copiar!</span>
      </S.InviteBox>
      <S.SocialIconsBox>
        <div>
          <BsInstagram size={32} />
        </div>
        <div>
          <FaFacebookF size={32} />
        </div>
        <div>
          <ImWhatsapp size={32} />
        </div>
      </S.SocialIconsBox>
      <S.InvitationsAcceptedBox>
        <div>
          <span>Convites aceitos</span>
          <span>{totalFriends ?? 0}/250</span>
        </div>
        <S.ProgressBar
          quantityFilledInPercent={
            totalFriends > 250
              ? '100%'
              : String((totalFriends / 250) * 100).concat('%')
          }
        >
          <div />
        </S.ProgressBar>
      </S.InvitationsAcceptedBox>
    </S.DivInviteFriends>
  );
}
