import { BsInstagram, BsPersonBadge } from 'react-icons/bs';

import { FaFacebookF } from 'react-icons/fa';

import { ImWhatsapp } from 'react-icons/im';

import { useMe } from 'hooks/me/useMe';
import { formatSepareteNumbers } from 'utils/formatters/formatSepareteNumbers';

import { getCurrentNodeEnv } from 'utils/currentNodeEnv';

import * as S from './styles';

export function InviteFriends() {
  const {
    data: { invite_code, invites_accepted },
  } = useMe();

  const [totalFriends, limite] = formatSepareteNumbers(invites_accepted);

  const inviteLink = `${getCurrentNodeEnv()}/signup?invite-code=${invite_code}`;

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
    <S.DivInviteFriends variant={totalFriends === limite ? 'limitReached' : ''}>
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
          <span>
            {totalFriends ?? 0}/{limite}
          </span>
        </div>
        <S.ProgressBar
          quantityFilledInPercent={
            totalFriends > limite
              ? '100%'
              : String((totalFriends / limite) * 100).concat('%')
          }
        >
          <div />
        </S.ProgressBar>
      </S.InvitationsAcceptedBox>
    </S.DivInviteFriends>
  );
}
