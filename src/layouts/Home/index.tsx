import Head from 'next/head';
import Image from 'next/legacy/image';

import Link from 'next/link';

import { Footer } from 'components/Footer';

import { ToolTipContact } from 'components/ToolTipContact';

import { SIGN_UP_PAGE } from 'constants/routesPath';

import { Header } from './Header';
import * as S from './styles';
import { HeroSection } from './HeroSection';
import { Plans } from './Plans';

export function HomePage() {
  return (
    <>
      <Head>
        <title>Clube Quantum</title>
      </Head>
      <Header />
      <HeroSection />
      <S.Background>
        <ToolTipContact />
        <S.Container>
          <S.ContainerRow style={{ marginTop: '49px' }}>
            <Image
              src="/images/banner_woman.svg"
              alt="Mulher com celular na mão"
              width={608.49}
              height={580}
            />
            <S.ContainerColumn>
              <S.TitleCard1>Uma parte do que vai...</S.TitleCard1>
              <S.SubTitleCard1>Com o Quantum volta!</S.SubTitleCard1>
              <Link href={SIGN_UP_PAGE}>
                <S.StyledButton>Conheça</S.StyledButton>
              </Link>
              <S.ContainerRowParag>
                <Image
                  src="/images/card_homepage.svg"
                  alt="Cartão"
                  width={18.91}
                  height={13.75}
                />
                <S.TitleParag>
                  Compras na mão e dinheiro no seu bolso!
                </S.TitleParag>
              </S.ContainerRowParag>
              <S.Parag style={{ marginLeft: '30px' }}>
                Ao adquirir um serviço ou fazer compra em um de nossos parceiros
                você recebe uma parte do seu dinheiro de volta.
              </S.Parag>
              <S.ContainerRowParag>
                <Image
                  src="/images/icon_user_homepage.svg"
                  alt="Cartão"
                  width={14.73}
                  height={20}
                />
                <S.TitleParag>
                  Quanto mais convidar, mais você tem a ganhar!
                </S.TitleParag>
              </S.ContainerRowParag>
              <S.Parag style={{ marginLeft: '26px' }}>
                No Quantum, os amigos que você convida também ganham junto com
                você e quanto mais você convida, mais você ganha.
              </S.Parag>
            </S.ContainerColumn>
          </S.ContainerRow>
          <S.ContainerRow style={{ margin: '72px 0' }}>
            <S.ContainerColumn>
              <S.TitleCard2>Indique seus amigos</S.TitleCard2>
              <S.SubTitleCard2>& ganhe R$5,00 por indicação!</S.SubTitleCard2>
              <S.Parag style={{ marginBottom: '12px' }}>
                O Plano de Afiliados Quantum garante a você a comissão contínua
                sobre os ganhos de seus afiliados que utilizam os serviços do
                Banco UM e do Clube Quantum.
              </S.Parag>
              <S.Parag style={{ marginBottom: '12px' }}>
                O pagamento da comissão é feito sempre sobre os ganhos do seu
                afiliado, referente ao faturamento do mês anterior.
              </S.Parag>
              <S.Parag style={{ marginBottom: '12px' }}>
                Todos os afiliados que forem indicados diretamente por você,
                seja através de seu link indicador ou de um convite seu enviado
                por e-mail, serão sempre inseridos em seu 1º Grau de afiliação.
              </S.Parag>
            </S.ContainerColumn>
            <Image
              src="/images/banner_man_homepage.svg"
              alt="Homem pulando"
              width={580}
              height={580}
            />
          </S.ContainerRow>
          <Plans />
        </S.Container>
      </S.Background>

      {/* <Footer /> */}
    </>
  );
}
