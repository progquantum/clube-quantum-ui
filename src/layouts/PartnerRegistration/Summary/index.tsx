import { MdAssignmentInd } from 'react-icons/md';
import { useTheme } from 'styled-components';
import Image from 'next/legacy/image';

import { BsFillCheckCircleFill } from 'react-icons/bs';

import router from 'next/router';

import { Button } from 'components/Button';

import { usePartnerStore } from 'store/partner-registration';

import { formatNumber } from 'utils/formatters/formatNumber';

import { DASHBOARD_ADM_PAGE } from 'constants/routesPath';

import { PosUser } from 'hooks/user/usePosSubscriptions/types';

import * as S from './styles';
import DraggableScrollContainer from '../DraggableScrollContainer';

export function Summary() {
  const { colors } = useTheme();
  const state = usePartnerStore(state => state);

  function getAbbreviatedDays(dates: string[]): string {
    const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    const selectedDays = dates
      .map(date => days.findIndex(day => day.startsWith(date.slice(0, 3))))
      .sort();
    const ranges: string[] = [];
    let currentRange: string[] = [];
    selectedDays.forEach((day, index) => {
      if (index === 0 || day !== selectedDays[index - 1] + 1) {
        currentRange = [days[day]];
        ranges.push(currentRange.join(''));
      } else if (currentRange.length === 1) {
        currentRange.push(' À ');
        currentRange.push(days[day]);
        ranges.pop();
        ranges.push(currentRange.join(''));
      } else {
        currentRange.pop();
        currentRange.push(days[day]);
        ranges.pop();
        ranges.push(currentRange.join(''));
      }
    });
    return ranges.join(' e ').toUpperCase();
  }

  const formattedScheduleCashBack = state.cashBackRules.map(schedule => {
    const abbreviatedDays = getAbbreviatedDays(schedule.selectDays);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { rateCashBack, rateCliente, rateAdm } = state.cashBackRules.find(
      d => d.selectDays.toString() === schedule.selectDays.toString(),
    )!;
    return { days: abbreviatedDays, rateCashBack, rateCliente, rateAdm };
  });

  const formattedSchedule = state.openHours.map(schedule => {
    const abbreviatedDays = getAbbreviatedDays(schedule.selectDays);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { time } = state.openHours.find(
      d => d.selectDays.toString() === schedule.selectDays.toString(),
    )!;
    return { days: abbreviatedDays, time };
  });

  const handleFinish = () => {
    router.push(DASHBOARD_ADM_PAGE);
    window.localStorage.removeItem('partnerStore');
    state.resetOpenHours();
    state.resetCashBackRules();
    state.resetMachinePos();
    state.setAbout('');
    state.setUser({} as PosUser);
    state.setFantasyName('');
    state.setMainPhoneHasWhatsApp(false);
    state.setCellPhone('');
    state.setCellPhoneHasWhatsApp(false);
    state.setWhatsAppPhone('');
    state.setCategoryId('');
    state.setCategoryName('');
    state.setCoordinates('');
    state.setLogo('', {} as File);
    state.setBanner('', {} as File);
    state.resetCurrentStep();
  };

  return (
    <S.Container>
      <S.Steps>
        <S.Step>
          <BsFillCheckCircleFill size={20.61} color={colors.royalblue} />
          <S.StepTextDone>Informações do estabelecimento</S.StepTextDone>
        </S.Step>
        <S.Line />
        <S.Step>
          <BsFillCheckCircleFill size={20.61} color={colors.royalblue} />
          <S.StepTextDone>
            Descrição do estabelecimento e cashback
          </S.StepTextDone>
        </S.Step>
        <S.Line />
        <S.Step>
          <BsFillCheckCircleFill size={20.61} color={colors.royalblue} />
          <S.StepTextDone>Resumo</S.StepTextDone>
        </S.Step>
      </S.Steps>

      <S.Title>Resumo do cadastro</S.Title>
      <S.Content>
        <S.ContentColumn>
          <S.Card>
            <S.Text>
              <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
              Informações do parceiro
            </S.Text>
            <div
              style={{
                display: 'flex',
                marginTop: '26.44px',
                flexDirection: 'column',
                gap: '32px',
              }}
            >
              <S.ContentRow>
                <S.TextStrong>Nome fantasia</S.TextStrong>
                <S.TextData>{state.fantasyName}</S.TextData>
              </S.ContentRow>
              <S.ContentRow>
                <S.TextStrong>Telefone celular</S.TextStrong>
                <S.TextData>{state.user.phone}</S.TextData>
              </S.ContentRow>
              {state.cellPhone && (
                <S.ContentRow>
                  <S.TextStrong>Telefone celular</S.TextStrong>
                  <S.TextData>{state.cellPhone}</S.TextData>
                </S.ContentRow>
              )}
              {state.whatsAppPhone && (
                <S.ContentRow>
                  <S.TextStrong>Celular WhatsApp</S.TextStrong>
                  <S.TextData>{state.whatsAppPhone}</S.TextData>
                </S.ContentRow>
              )}
              <S.ContentRow>
                <S.TextStrong>Categoria</S.TextStrong>
                <S.TextData>{state.categoryName}</S.TextData>
              </S.ContentRow>
              <S.ContentRow>
                <S.TextStrong>Geolocalização</S.TextStrong>
                <S.TextData>{state.coordinates}</S.TextData>
              </S.ContentRow>
            </div>
          </S.Card>

          <S.Card>
            <S.Text>
              <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
              Sobre o horário
            </S.Text>
            <div
              style={{
                display: 'flex',
                marginTop: '26.44px',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <S.TitleOpeningHours>
                Horário de funcionamento
              </S.TitleOpeningHours>
              {formattedSchedule.map(schedule => (
                <S.ContentRow key={schedule.days}>
                  <S.TextData>{schedule.days}</S.TextData>
                  <S.TextData>{schedule.time}</S.TextData>
                </S.ContentRow>
              ))}
            </div>
          </S.Card>
          <S.Card>
            <S.Text>
              <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
              Maquininha POS
            </S.Text>
            <div
              style={{
                display: 'flex',
                marginTop: '26.44px',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {state.machinePos.map(schedule => (
                <div>
                  <S.TitleOpeningHours style={{ marginBottom: '16px' }}>
                    Número de série
                  </S.TitleOpeningHours>
                  <S.ContentRow key={schedule.id}>
                    <S.TextData>{schedule.serie}</S.TextData>
                  </S.ContentRow>
                </div>
              ))}
            </div>
          </S.Card>
        </S.ContentColumn>

        <S.ContentColumn>
          <S.Card>
            <S.Text style={{ marginBottom: '26.44px' }}>
              <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
              Imagem Banner
            </S.Text>
            {state.banner.bannerURL ? (
              <Image
                src={state.banner.bannerURL}
                width={317.5}
                height={149.93}
                objectFit="cover"
                style={{ borderRadius: '10px' }}
              />
            ) : (
              <Image src="/images/upload.svg" width={120} height={120} />
            )}
          </S.Card>
          <S.Card>
            <S.Text style={{ marginBottom: '26.44px' }}>
              <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
              Imagem Logo
            </S.Text>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {state.logo.logoURL ? (
                <Image
                  src={state.logo.logoURL}
                  width={120}
                  height={120}
                  objectFit="cover"
                  style={{ borderRadius: '50%' }}
                />
              ) : (
                <Image src="/images/upload.svg" width={120} height={120} />
              )}
            </div>
          </S.Card>
          <S.Card>
            <S.Text>
              <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
              Sobre o estabelecimento
            </S.Text>
            <div
              style={{
                display: 'flex',
                marginTop: '26.44px',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <S.TitleOpeningHours>Sobre o estabelecimento</S.TitleOpeningHours>
              <S.TextData>{state.aboutEstablishment}</S.TextData>
            </div>
          </S.Card>
        </S.ContentColumn>
      </S.Content>
      <DraggableScrollContainer>
        <S.ContainerTable>
          <S.TopTable>
            <S.TopParams>Dia da semana</S.TopParams>
            <S.TopParams>Cashback total</S.TopParams>
            <S.TopParams>Cashback para o cliente</S.TopParams>
            <S.TopParams>Taxa adm Quantum</S.TopParams>
          </S.TopTable>
          <S.Table>
            {formattedScheduleCashBack.map(schedule => (
              <S.TableRow>
                <S.Date>{schedule.days}</S.Date>
                <S.Percentage>
                  {formatNumber.format(schedule.rateCashBack)}%
                </S.Percentage>
                <S.Percentage>
                  {formatNumber.format(schedule.rateCliente)}%
                </S.Percentage>
                <S.Percentage>
                  {formatNumber.format(schedule.rateAdm)}%
                </S.Percentage>
              </S.TableRow>
            ))}
          </S.Table>
        </S.ContainerTable>
      </DraggableScrollContainer>
      <S.ContainerButton>
        <Button variant="secondary" onClick={state.previousStep}>
          Voltar
        </Button>
        <Button onClick={handleFinish}>Finalizar</Button>
      </S.ContainerButton>
    </S.Container>
  );
}
