import Image from 'next/legacy/image';
import { useRouter } from 'next/router';

import Head from 'next/head';

import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { useShare } from 'hooks/useShare';
import { DASHBOARD_PAGE, SUBSCRIPTIONS_PAGE } from 'constants/routesPath';
import { useMe } from 'hooks/me/useMe';
import { HeaderAuth } from 'components/Header/HeaderAuth';
import { useGetInviteLink } from 'hooks/me/useInviteLink';

import * as S from './styles';

export function InviteFriendsPage() {
  const { data: user } = useMe();
  const { push } = useRouter();
  const { data: inviteLink } = useGetInviteLink();
  const share = useShare();
  const hasInviteCode = user?.invite_code;

  const handleShare = () => {
    share({
      text: 'Seja um membro Clube Quantum!',
      title: 'Cadastre-se a partir do link de convite abaixo.',
      url: inviteLink,
    });
  };

  const handleRedirectPage = () => {
    push(SUBSCRIPTIONS_PAGE);
  };

  return (
    <>
      <Head>
        <title>Convidar Amigos</title>
      </Head>
      <HeaderAuth />
      <S.Container>
        <S.ButtonContainer>
          <Button onClick={() => push(DASHBOARD_PAGE)}>Voltar</Button>
        </S.ButtonContainer>

        {hasInviteCode ? (
          <>
            <div>
              <S.Heading>
                Nós damos valor <br />
                às amizades
              </S.Heading>

              <S.Content>
                E recompensamos você, para cada Amigo convidado que se cadastrar
                no Clube Quantum.
              </S.Content>

              <S.InviteCodeContainer
                variant="transparent"
                onClick={handleShare}
              >
                <p>
                  Seu link de convite é:
                  <br />
                  <strong>{inviteLink}</strong>
                </p>
              </S.InviteCodeContainer>
            </div>

            <S.ImageDiv>
              <Image
                width={375}
                height={457}
                src="/images/friends.svg"
                alt=""
              />
            </S.ImageDiv>
          </>
        ) : (
          <>
            <S.ContainerWrapper>
              <S.Heading>Oops, você ainda não pode convidar amigos!</S.Heading>

              <S.Text>
                Para convidar seus amigos e experimentar os benefícios quantum,
                você precisa estar inserido em um plano!
              </S.Text>

              <S.ButtonPlan>
                <S.HeadingInfo>
                  Conheça os planos disponíveis no clube quantum, e clique
                  abaixo para acessar e começar usufruir dos benefícios.
                </S.HeadingInfo>

                <Button onClick={handleRedirectPage}>Aderir a um plano</Button>
              </S.ButtonPlan>
            </S.ContainerWrapper>

            <S.ImageDiv>
              <Image
                width={385}
                height={467}
                src="/images/friends-error.svg"
                alt=""
              />
            </S.ImageDiv>
          </>
        )}
      </S.Container>
      <Footer />
    </>
  );
}
