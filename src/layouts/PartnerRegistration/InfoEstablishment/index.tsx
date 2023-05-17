/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { BsCircle, BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import Image from 'next/legacy/image';
import { useTheme } from 'styled-components';

import { useRouter } from 'next/router';

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

import { schema } from './schemas';
import * as S from './styles';

export function InfoEstablishment() {
  const {
    nextStep,
    setCompanyName,
    user,
    setUser,
    companyName,
    phoneNumber1,
    setPhoneNumber1,
    phoneNumber1HasWhatsApp,
    setPhoneNumber1HasWhatsApp,
    phoneNumber2,
    setPhoneNumber2,
    phoneNumber2HasWhatsApp,
    setPhoneNumber2HasWhatsApp,
    phoneNumber3,
    setPhoneNumber3,
    categoryValue,
    setCategoryValue,
    linkGeolocalizacao,
    setLinkGeolocalizacao,
    setLogo,
    logo,
    setBanner,
    banner,
  } = usePartnerStore(state => state);
  const { colors } = useTheme();
  const { data } = usePosSubscriptions({ name: '' });
  const { data: userSelect } = usePosSubscriptions({ name: user });
  const { data: categories } = useGetFilterCategories();
  const { mutate: upsertEstablishment, isLoading } = useUpsertEstablishment();
  const router = useRouter();
  const formRef = useRef<FormHandles>(null);
  const ClearUser = () => {
    setUser('');
    setPhoneNumber1('');
  };

  const AllCategories = categories?.map(categorie => {
    const value = categorie.id;
    const label = categorie.name;

    return { value, label };
  });

  const options = data?.map(subscription => {
    const { legal_person, individual_person, id } = subscription;
    const value = id;
    const label = legal_person
      ? `${legal_person.company_name} - ${legal_person.cnpj}`
      : `${individual_person.name} - ${individual_person.cpf}`;

    return { value, label };
  });

  const handleSubmit: SubmitHandler = useCallback(data => {
    performSchemaValidation({
      formRef,
      data,
      schema,
    }).then(() => {
      const {
        cel_phone,
        cel_phone_has_whatsapp,
        main_phone_has_whatsapp,
        whatsapp_phone,
        ...rest
      } = data;

      upsertEstablishment(
        {
          ...rest,
          contacts: {
            cel_phone,
            cel_phone_has_whatsapp,
            main_phone_has_whatsapp,
            whatsapp_phone,
          },
        },
        {
          onSuccess: () => {
            nextStep();
          },
        },
      );
    });
  }, []);

  const handleCancel = () => {
    window.localStorage.removeItem('partnerStore');
    router.push(DASHBOARD_PAGE);
  };

  const handleBannerPreview = (event: ChangeEvent<HTMLInputElement>) => {
    const newImg = event.target.files[0];

    const currentFile = event.target.files[0].size;
    const allowedSize = 5242880; // 5mb
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    const allowedImageFormats =
      event.target.files.length &&
      allowedTypes.includes(newImg.type) &&
      currentFile <= allowedSize;

    if (allowedImageFormats) {
      setBanner(URL.createObjectURL(newImg), newImg);
    }

    if (!allowedImageFormats) return error('Arquivo não suportado');
  };

  const handleLogoPreview = (event: ChangeEvent<HTMLInputElement>) => {
    const newImg = event.target.files[0];

    const currentFile = event.target.files[0].size;
    const allowedSize = 5242880; // 5mb
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    const allowedImageFormats =
      event.target.files.length &&
      allowedTypes.includes(newImg.type) &&
      currentFile <= allowedSize;

    if (allowedImageFormats) {
      setLogo(URL.createObjectURL(newImg), newImg);
    }

    if (!allowedImageFormats) return error('Arquivo não suportado');
  };

  useEffect(() => {
    if (userSelect && userSelect.length > 0 && userSelect[0].phone) {
      setPhoneNumber1(userSelect[0].phone);
    }
  }, [userSelect]);

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
          name="user_id"
          label="Pesquisar usuário"
          placeholder="Pesquisar usuário cadastrado"
          options={options}
          value={user}
          defaultValue={user || ''}
          onChange={e => setUser(e.target.value)}
        />
        {user && (
          <S.SelectUser>
            <S.UserData>
              <S.UserName>{user}</S.UserName>
              <S.Text500>
                {userSelect?.[0]?.legal_person ? 'CNPJ: ' : 'CPF: '}
                {userSelect?.[0]?.legal_person
                  ? userSelect?.[0]?.legal_person.cnpj
                  : userSelect?.[0]?.individual_person.cpf}
              </S.Text500>
            </S.UserData>
            <S.UserStatus>
              <S.Status>Ativo</S.Status>
              <S.UserDataSince>
                <S.Text500>Usuário desde</S.Text500>
                <S.Text600>
                  {' '}
                  {dayjs(userSelect?.[0]?.created_at).format('DD/MM/YYYY')}
                </S.Text600>
              </S.UserDataSince>
              <AiOutlineClose
                style={{ cursor: 'pointer' }}
                size={20}
                color={colors.danger}
                onClick={ClearUser}
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
              defaultValue={companyName || ''}
              onChange={e => setCompanyName(e.target.value)}
            />
            <Input
              type="text"
              inputMode="tel"
              name="cel_phone"
              placeholder="(00) 0 0000-0000"
              label="Telefone celular"
              readOnly
              value={phoneNumber1}
              onChange={e => {
                setPhoneNumber1(e.target.value);
                formRef.current.setFieldValue(
                  'phone',
                  formatPhoneNumber(e.target.value),
                );
              }}
            />
            <Checkbox
              type="checkbox"
              name="main_phone_has_whatsapp"
              text="Este telefone possui WhatsApp"
              checked={phoneNumber1HasWhatsApp || false}
              onChange={e => setPhoneNumber1HasWhatsApp(e.target.checked)}
            />
            <Input
              type="text"
              inputMode="tel"
              name="phone"
              placeholder="(00) 00000-0000"
              label="Telefone celular (opcional)"
              value={phoneNumber2 || ''}
              onChange={e => {
                setPhoneNumber2(formatPhoneNumber(e.target.value));
                formRef.current.setFieldValue(
                  'phone2',
                  formatPhoneNumber(e.target.value),
                );
              }}
            />
            <Checkbox
              type="checkbox"
              name="cel_phone_has_whatsapp"
              text="Este telefone possui WhatsApp"
              checked={phoneNumber2HasWhatsApp || false}
              onChange={e => setPhoneNumber2HasWhatsApp(e.target.checked)}
            />
            <Input
              type="text"
              inputMode="tel"
              name="whatsapp_phone"
              placeholder="(00) 00000-0000"
              label="Celular WhatsApp (opcional)"
              value={formatPhoneNumber(phoneNumber3) || ''}
              onChange={e => {
                setPhoneNumber3(e.target.value);
                formRef.current.setFieldValue(
                  'phone3',
                  formatPhoneNumber(e.target.value),
                );
              }}
            />
            <Select
              name="category_id"
              label="Categoria"
              placeholder="Escolha uma opção"
              defaultValue={categoryValue || ''}
              onChange={e => setCategoryValue(e.target.value)}
              options={AllCategories}
            />
            <Input
              type="text"
              name="coordinates"
              placeholder="Ex: -15.584010, -56.085562"
              label="Coordenadas"
              defaultValue={linkGeolocalizacao || ''}
              onChange={e => setLinkGeolocalizacao(e.target.value)}
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
                onChange={handleBannerPreview}
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
                onChange={handleLogoPreview}
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
