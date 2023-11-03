import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';

import * as S from '../styles';

export function InviteLink({
  invite,
  totalFriends,
  limite,
}: {
  invite: string;
  totalFriends: number;
  limite: number;
}) {
  const handleCopyOnClick = async () => {
    try {
      await navigator.clipboard.writeText(invite);
    } catch (err: unknown) {
      if (err instanceof Error) {
        return err;
      }
    }
  };

  if (!invite)
    return (
      <S.NoInviteText>
        Em alguns instantes você receberá seu link de indicação para convidar
        seus amigos. Quando estiver disponível ele aparecerá aqui!
      </S.NoInviteText>
    );

  return (
    <>
      <S.TitleInviteFriends>Não fique sozinho nessa!</S.TitleInviteFriends>
      <S.TextInviteFriends>
        Convide seus amigos e ganhe cashback junto com eles!!!
      </S.TextInviteFriends>
      <S.InviteBox onClick={handleCopyOnClick}>
        Seu link de convite é: <S.Bold>{invite}</S.Bold>{' '}
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
    </>
  );
}
