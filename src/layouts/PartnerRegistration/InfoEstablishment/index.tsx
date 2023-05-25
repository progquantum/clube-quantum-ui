/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import { BsCircle, BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import Image from 'next/legacy/image';
import { useTheme } from 'styled-components';

import { useRouter } from 'next/router';

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

import { DASHBOARD_PAGE } from 'constants/routesPath';

import { usePosSubscriptions } from 'hooks/user/usePosSubscriptions';

import { useGetFilterCategories } from 'hooks/establishment/useGetCategories';

import { useUpsertEstablishment } from 'hooks/establishment/useUpsertEstablishment';

import { useUpsertEstablishmentImage } from 'hooks/establishment/useUpsertEstablishmentImage';

import { success } from 'helpers/notify/success';

import { schema } from './schemas';
import * as S from './styles';

export function InfoEstablishment() {
  const {
    nextStep,
    user,
    setUser,
    fantasyName,
    setFantasyName,
    mainPhoneHasWhatsApp,
    setMainPhoneHasWhatsApp,
    cellPhone,
    setCellPhone,
    cellPhoneHasWhatsApp,
    setCellPhoneHasWhatsApp,
    whatsAppPhone,
    setWhatsAppPhone,
    categoryId,
    setCategoryId,
    coordinates,
    setCoordinates,
    logo,
    setLogo,
    banner,
    setBanner,
  } = usePartnerStore(state => state);
  const { colors } = useTheme();
  const { data } = usePosSubscriptions({ name: '' });
  const { data: categories } = useGetFilterCategories();
  const { mutate: upsertEstablishment, isLoading: isUpserting } =
    useUpsertEstablishment();
  const { mutate: upsertEstablishmentImage, isLoading: isUploadingImages } =
    useUpsertEstablishmentImage();
  const router = useRouter();
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
    const label = legal_person
      ? `${legal_person.company_name} - ${legal_person.cnpj}`
      : `${individual_person.name} - ${individual_person.cpf}`;
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
            main_phone,
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
                if (logo.logoFile) {
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

                if (banner.bannerFile) {
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
                nextStep();
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
    [logo.logoFile, banner.bannerFile],
  );

  const handleCancel = () => {
    window.localStorage.removeItem('partnerStore');
    router.push(DASHBOARD_PAGE);
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
    user && user.legal_person
      ? `CNPJ: ${user?.legal_person?.cnpj}`
      : `CPF: ${user?.individual_person?.cpf}`;

  const isLoading = isUpserting || isUploadingImages;

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
          value={JSON.stringify(user)}
          onChange={e => {
            if (e.target.value === 'default') {
              clearUser();
              return;
            }
            setUser(JSON.parse(e.target.value));
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
                onClick={clearUser}
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
              defaultValue={fantasyName || ''}
              onChange={e => setFantasyName(e.target.value)}
            />
            <Input
              type="text"
              inputMode="tel"
              name="main_phone"
              placeholder="(00) 0 0000-0000"
              label="Telefone celular"
              readOnly
              value={user?.phone || ''}
            />
            <Checkbox
              type="checkbox"
              name="main_phone_has_whatsapp"
              text="Este telefone possui WhatsApp"
              defaultChecked={mainPhoneHasWhatsApp}
              onChange={e => setMainPhoneHasWhatsApp(e.target.checked)}
            />
            <Input
              type="text"
              inputMode="tel"
              name="cell_phone"
              placeholder="(00) 00000-0000"
              label="Telefone celular (opcional)"
              value={cellPhone || ''}
              onChange={e => {
                setCellPhone(formatPhoneNumber(e.target.value));
              }}
            />
            <Checkbox
              type="checkbox"
              name="cell_phone_has_whatsapp"
              text="Este telefone possui WhatsApp"
              defaultChecked={cellPhoneHasWhatsApp}
              onChange={e => setCellPhoneHasWhatsApp(e.target.checked)}
            />
            <Input
              type="text"
              inputMode="tel"
              name="whatsapp_phone"
              placeholder="(00) 00000-0000"
              label="Celular WhatsApp (opcional)"
              value={formatPhoneNumber(whatsAppPhone) || ''}
              onChange={e => {
                setWhatsAppPhone(e.target.value);
              }}
            />
            <Select
              name="category_id"
              label="Categoria"
              placeholder="Escolha uma opção"
              defaultValue={categoryId || ''}
              onChange={e => {
                if (e.target.value === 'default') {
                  formRef.current.setFieldValue('category_id', '');
                  return;
                }

                setCategoryId(e.target.value);
              }}
              options={establishmentCategories}
            />
            <Input
              type="text"
              name="coordinates"
              placeholder="Ex: -15.584010, -56.085562"
              label="Coordenadas"
              defaultValue={coordinates || ''}
              onChange={e => setCoordinates(e.target.value)}
            />
          </S.DivColumn>
          <S.DivColumn>
            <S.Banner>
              <S.TitleBanner>Enviar imagem para o banner</S.TitleBanner>
              <S.SubTitleBanner>
                Instruções para o envio da imagem
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
