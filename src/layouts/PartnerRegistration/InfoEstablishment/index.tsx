/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { BsCircle, BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import Image from 'next/legacy/image';
import { useTheme } from 'styled-components';

import { ValidationError } from 'yup';

import { AxiosError } from 'axios';

import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber';

import { Select } from 'components/Select';
import { Input } from 'components/Input';
import { Checkbox } from 'components/Checkbox';
import { Button } from 'components/Button';

import { error } from 'helpers/notify/error';

import { usePartnerStore } from 'store/partner-registration';

import { performSchemaValidation } from 'utils/performSchemaValidation';

import { usePosSubscriptions } from 'hooks/user/usePosSubscriptions';

import { useGetFilterCategories } from 'hooks/establishment/useGetCategories';

import { useUpsertEstablishment } from 'hooks/establishment/useUpsertEstablishment';

import { useUpsertEstablishmentImage } from 'hooks/establishment/useUpsertEstablishmentImage';

import { success } from 'helpers/notify/success';

import { PosUser } from 'hooks/user/usePosSubscriptions/types';

import { schema } from './schemas';
import * as S from './styles';

export function InfoEstablishment() {
  const {
    nextStep,
    user,
    setUser,
    fantasyName,
    setFantasyName,
    mainPhone,
    setMainPhone,
    mainPhoneHasWhatsApp,
    setMainPhoneHasWhatsApp,
    cellPhone,
    setCellPhone,
    cellPhoneHasWhatsApp,
    setCellPhoneHasWhatsApp,
    whatsAppPhone,
    setWhatsAppPhone,
    setCategoryName,
    categoryId,
    setCategoryId,
    coordinates,
    setCoordinates,
    logo,
    setLogo,
    banner,
    setBanner,
    setAbout,
    setOpenDays,
    setOpenHours,
    setCashBackDays,
    setRateCashBack,
    setRateCliente,
    setRateAdm,
    setMachinePos,
  } = usePartnerStore(state => state);
  const { colors } = useTheme();
  const { data } = usePosSubscriptions({ name: '' });
  const { data: categories } = useGetFilterCategories();
  const { mutate: upsertEstablishment, isLoading: isUpserting } =
    useUpsertEstablishment();
  const { mutate: upsertEstablishmentImage, isLoading: isUploadingImages } =
    useUpsertEstablishmentImage();
  const formRef = useRef<FormHandles>(null);

  const clearUser = () => {
    setUser(null);
    formRef.current.clearField('user');
  };

  const establishmentCategories = categories?.map(category => {
    const value = category.id;
    const label = category.name;
    return { value, label };
  });
  const registeredUsers = data?.map(subscription => {
    const { legal_person, individual_person } = subscription;
    const value = JSON.stringify(subscription);
    let label = '';

    if (legal_person && legal_person.company_name && legal_person.cnpj) {
      label = `${legal_person.company_name} - ${legal_person.cnpj}`;
    } else if (
      individual_person &&
      individual_person.name &&
      individual_person.cpf
    ) {
      label = `${individual_person.name} - ${individual_person.cpf}`;
    }
    return { value, label };
  });

  const handleSubmit: SubmitHandler = useCallback(
    data => {
      performSchemaValidation({
        formRef,
        data,
        schema,
      })
        .then(() => {
          const {
            cell_phone,
            cell_phone_has_whatsapp,
            main_phone_has_whatsapp,
            whatsapp_phone,
            user,
            category_id,
            // not needed on request body
            // main_phone,
            ...rest
          } = data;

          const parsedUser = JSON.parse(user);

          upsertEstablishment(
            {
              ...rest,
              user_id: parsedUser.id,
              category_id,
              contacts: {
                main_phone_has_whatsapp,
                cel_phone_has_whatsapp: cell_phone_has_whatsapp,
                ...(cell_phone ? { cel_phone: cell_phone } : {}),
                ...(whatsapp_phone ? { whatsapp_phone } : {}),
              },
            },
            {
              onSuccess: () => {
                if (logo.logoFile instanceof File) {
                  const requestBody = {
                    image: logo.logoFile,
                    user_id: parsedUser.id,
                    image_type: 'logo',
                  };

                  upsertEstablishmentImage(requestBody, {
                    onSuccess: () => {
                      success('Imagem enviada com sucesso');
                    },
                    onError: err => {
                      if (err instanceof AxiosError) {
                        error(err.message);
                      }
                    },
                  });
                }

                if (banner.bannerFile instanceof File) {
                  const requestBody = {
                    image: banner.bannerFile,
                    user_id: parsedUser.id,
                    image_type: 'cover',
                  };

                  upsertEstablishmentImage(requestBody, {
                    onSuccess: () => {
                      success('Imagem enviada com sucesso');
                    },
                    onError: err => {
                      if (err instanceof AxiosError) {
                        error(err.message);
                      }
                    },
                  });
                }
                if (logo.logoURL && banner.bannerURL) {
                  nextStep();
                } else {
                  error(
                    'Insira um banner e um logo para seguir para próxima tela!',
                  );
                }
              },
            },
          );
        })
        .catch(err => {
          if (err instanceof ValidationError) {
            error(err.errors[0]);
          }
        });
    },
    [logo.logoFile, banner.bannerFile, user?.MarketplaceImages],
  );

  const state = usePartnerStore(state => state);

  const handleCancel = () => {
    window.localStorage.removeItem('partnerStore');
    state.resetOpenHours();
    state.resetCashBackRules();
    state.resetMachinePos();
    state.setAbout('');
    state.setUser({} as PosUser);
    state.setFantasyName('');
    state.setMainPhone('');
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
    clearUser();
  };

  const handleImagePreview = (
    event: ChangeEvent<HTMLInputElement>,
    whichPreview: string,
  ) => {
    const newImg = event.target.files[0];
    const currentFile = event.target.files[0].size;
    const allowedSize = 5242880; // 5mb
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    const allowedImageFormats =
      event.target.files.length &&
      allowedTypes.includes(newImg.type) &&
      currentFile <= allowedSize;

    if (allowedImageFormats) {
      if (whichPreview === 'banner') {
        setBanner(URL.createObjectURL(newImg), newImg);
      } else {
        setLogo(URL.createObjectURL(newImg), newImg);
      }
    }

    if (!allowedImageFormats) return error('Arquivo não suportado');
  };

  const userDocument =
    user &&
    user.legal_person &&
    user.legal_person.company_name &&
    user.legal_person.cnpj
      ? `CNPJ: ${user?.legal_person?.cnpj}`
      : `CPF: ${user?.individual_person?.cpf}`;

  const isLoading = isUpserting || isUploadingImages;

  const handleEstablishments = (e: PosUser) => {
    setUser(e);
    setFantasyName(e.establishment_pos.corporate_name);
    setMainPhone(e.phone);
    setCategoryName(e.category?.name);
    setCategoryId(e.category?.id);
    const lat = e.establishment_pos.lat_location;
    const long = e.establishment_pos.long_location;
    setCoordinates(`${lat}, ${long}`);
    setLogo(e.MarketplaceImages[0].url, {} as File);
    setBanner(e.MarketplaceImages[1].url, {} as File);

    setAbout(e.establishment_pos.about);
    e.establishment_pos_working_hours.map(item =>
      setOpenDays(item.id, item.day_of_week),
    );
    e.establishment_pos_working_hours.map(item =>
      setOpenHours(item.id, `${item.opening_time} AS ${item.closing_time}`),
    );

    e.establishment_pos_working_hours.map(item =>
      setCashBackDays(item.cashback_split.id, item.day_of_week),
    );

    e.establishment_pos_working_hours.map(item =>
      setRateCashBack(
        item.cashback_split.id,
        item.cashback_split.total_cashback,
      ),
    );

    e.establishment_pos_working_hours.map(item =>
      setRateCliente(
        item.cashback_split.id,
        item.cashback_split.client_cashback,
      ),
    );
    e.establishment_pos_working_hours.map(item =>
      setRateAdm(item.cashback_split.id, item.cashback_split.quantum_cashback),
    );

    e.PosSerialNumber.map(item => setMachinePos(item.id, item.serial_number));
  };

  useEffect(() => {
    if (user !== null) {
      formRef.current.setFieldValue('user', JSON.stringify(user));
    }
  });

  return (
    <S.Container>
      <S.Steps>
        <S.Step>
          <BsFillCheckCircleFill size={20.61} color={colors.royalblue} />
          <S.StepTextDone>Informações do estabelecimento</S.StepTextDone>
        </S.Step>
        <S.Line />
        <S.Step>
          <BsCircle
            size={20.61}
            color={colors.darkslategray}
            fillOpacity={0.5}
          />
          <S.NextStepText>
            Descrição do estabelecimento e cashback
          </S.NextStepText>
        </S.Step>
        <S.Line />
        <S.Step>
          <BsCircle
            size={20.61}
            color={colors.darkslategray}
            fillOpacity={0.5}
          />
          <S.NextStepText>Resumo</S.NextStepText>
        </S.Step>
      </S.Steps>
      <S.HeadTitle>
        <S.Title>Cadastrar estabelecimento</S.Title>
      </S.HeadTitle>
      <S.Form as={Form} ref={formRef} onSubmit={handleSubmit} className="form">
        <Select
          name="user"
          label="Pesquisar usuário"
          placeholder="Pesquisar usuário cadastrado"
          options={registeredUsers}
          value={JSON.stringify(user) || 'default'}
          disabled={user !== null}
          onChange={e => {
            if (e.target.value === 'default') {
              clearUser();
              return;
            }

            handleEstablishments(JSON.parse(e.target.value));
          }}
        />
        {user && Object.keys(user).length > 1 && (
          <S.SelectUser>
            <S.UserData>
              <S.UserName>{user.id}</S.UserName>
              <S.Text500>{userDocument}</S.Text500>
            </S.UserData>
            <S.UserStatus>
              <S.Status>Ativo</S.Status>
              <S.UserDataSince>
                <S.Text500>Usuário desde</S.Text500>
                <S.Text600>
                  {dayjs(user.created_at).format('DD/MM/YYYY')}
                </S.Text600>
              </S.UserDataSince>
              <AiOutlineClose
                style={{ cursor: 'pointer' }}
                size={20}
                color={colors.danger}
                onClick={handleCancel}
              />
            </S.UserStatus>
          </S.SelectUser>
        )}
        <S.DivRow>
          <S.DivColumn>
            <Input
              type="text"
              name="fantasy_name"
              placeholder="Digite o nome do estabelecimento"
              label="Nome fantasia"
              value={fantasyName}
              onChange={e => setFantasyName(e.target.value)}
            />
            <Input
              type="text"
              inputMode="tel"
              name="main_phone"
              placeholder="(00) 0 0000-0000"
              label="Telefone celular"
              value={mainPhone}
              onChange={e => setMainPhone(formatPhoneNumber(e.target.value))}
            />
            <Checkbox
              type="checkbox"
              name="main_phone_has_whatsapp"
              text="Este telefone possui WhatsApp"
              checked={mainPhoneHasWhatsApp}
              onChange={e => setMainPhoneHasWhatsApp(e.target.checked)}
            />
            <Input
              type="text"
              inputMode="tel"
              name="cell_phone"
              placeholder="(00) 00000-0000"
              label="Telefone celular (opcional)"
              value={cellPhone}
              onChange={e => {
                setCellPhone(formatPhoneNumber(e.target.value));
              }}
            />
            <Checkbox
              type="checkbox"
              name="cell_phone_has_whatsapp"
              text="Este telefone possui WhatsApp"
              checked={cellPhoneHasWhatsApp}
              onChange={e => setCellPhoneHasWhatsApp(e.target.checked)}
            />
            <Input
              type="text"
              inputMode="tel"
              name="whatsapp_phone"
              placeholder="(00) 00000-0000"
              label="Celular WhatsApp (opcional)"
              value={formatPhoneNumber(whatsAppPhone)}
              onChange={e => {
                setWhatsAppPhone(e.target.value);
              }}
            />
            <Select
              name="category_id"
              label="Categoria"
              placeholder="Escolha uma opção"
              value={categoryId}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                const selectedOptionText =
                  e.target[e.target.selectedIndex].innerText;

                if (e.target.value === 'default') {
                  formRef.current.setFieldValue('category_id', '');
                  return;
                }

                setCategoryName(selectedOptionText);
                setCategoryId(e.target.value);
              }}
              options={establishmentCategories}
            />
            <Input
              type="text"
              name="coordinates"
              placeholder="Ex: -15.584010, -56.085562"
              label="Coordenadas"
              value={coordinates}
              onChange={e => setCoordinates(e.target.value)}
            />
          </S.DivColumn>
          <S.DivColumn>
            <S.Banner>
              <S.TitleBanner>Enviar imagem para o banner</S.TitleBanner>
              <S.SubTitleBanner>
                Instruções para o envio da imagem
              </S.SubTitleBanner>
              <S.SubTitleBanner>Dimensão: 642px X 321px</S.SubTitleBanner>
              <S.SubTitleBanner>
                Jpeg, Jpg e Png. Limite Máximo: 15MB
              </S.SubTitleBanner>
              {banner.bannerURL ? (
                <Image
                  src={banner.bannerURL}
                  width={361.5}
                  height={118}
                  objectFit="cover"
                  style={{ borderRadius: '10px' }}
                />
              ) : (
                <Image src="/images/upload.svg" width={118} height={118} />
              )}
              <S.UploadButton htmlFor="banner">
                Fazer upload de uma imagem
              </S.UploadButton>
              <S.InputFile
                type="file"
                name="banner"
                id="banner"
                onChange={event => handleImagePreview(event, 'banner')}
              />
            </S.Banner>
            <S.Logo>
              <S.TitleLogo>
                Enviar imagem para o logo do estabelecimento
              </S.TitleLogo>
              <S.SubTitleLogo>Instruções para o envio da imagem</S.SubTitleLogo>
              <S.SubTitleBanner>Dimensão: 642px X 321px</S.SubTitleBanner>
              <S.SubTitleBanner>
                Jpeg, Jpg e Png. Limite Máximo: 15MB
              </S.SubTitleBanner>
              {logo.logoURL ? (
                <Image
                  src={logo.logoURL}
                  width={120}
                  height={120}
                  objectFit="cover"
                  style={{ borderRadius: '50%' }}
                />
              ) : (
                <Image src="/images/upload.svg" width={118} height={118} />
              )}
              <S.UploadButton htmlFor="logo">
                Fazer upload de uma imagem
              </S.UploadButton>
              <S.InputFile
                type="file"
                name="logo"
                id="logo"
                onChange={event => {
                  handleImagePreview(event, 'logo');
                }}
              />
            </S.Logo>
          </S.DivColumn>
        </S.DivRow>
        <S.ContainerButton>
          <Button
            loading={isLoading}
            onClick={handleCancel}
            variant="secondary"
          >
            Cancelar
          </Button>
          <Button type="submit" loading={isLoading}>
            Confirmar
          </Button>
        </S.ContainerButton>
      </S.Form>
    </S.Container>
  );
}
