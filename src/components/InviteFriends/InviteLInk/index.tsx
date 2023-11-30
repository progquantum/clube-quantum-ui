import { BsInstagram, BsPersonBadge } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';

import { useIndirectFriends } from 'hooks/me/useIndirectFriends';

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
  const { data } = useIndirectFriends();
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
      <S.IndirectGainsContainer>
        <S.TitleContainer>
          <BsPersonBadge />
          <S.TitleFriends>Bônus por indicações indiretas</S.TitleFriends>
        </S.TitleContainer>

        <S.InvitationsAcceptedBox>
          <div>
            <span>Sua conexões indiretas</span>
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
          <S.BonusEarningContainer>
            <span>Seu bônus com conexões indiretas esse mês foi de:</span>
            <span>
              {new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(data.total_cashback_this_month_by_indirect_friends)}
            </span>
          </S.BonusEarningContainer>
        </S.InvitationsAcceptedBox>
      </S.IndirectGainsContainer>
    </>
  );
}
