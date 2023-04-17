import { ChangeEvent, useCallback, useRef } from 'react';
import { useQueryClient } from 'react-query';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import {
  FiMapPin,
  FiPackage,
  FiHome,
  FiMap,
  FiGlobe,
  FiInfo,
} from 'react-icons/fi';
import { BiBuildingHouse } from 'react-icons/bi';
import { BsPinMap } from 'react-icons/bs';

import { RiMapPinLine } from 'react-icons/ri';

import { Modal as ModalAddress } from 'components/Modal';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { QUERY_KEY_PROFILE, useUserProfile } from 'hooks/me/useUserProfile';
import { UpdateUserAddress } from 'hooks/user/useUpdateUserAddress';
import { formatCEP } from 'utils/formatters/formatCEP';
import { formatAddressNumber } from 'utils/formatters/formatAddressNumber';

import { error } from 'helpers/notify/error';
import { success } from 'helpers/notify/success';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { getZipCode } from 'services/resources';
import { formatUF } from 'utils/formatters/formatUF';
import { formatCountry } from 'utils/formatters/formatCountry';

import { AddressInformationProps, AddressFormValues } from './types';
import { schema } from './schemas';
import * as S from './styles';

export function Modal({ onRequestClose }: AddressInformationProps) {
  const { mutateAsync: updateAddress, isLoading: loading } =
    UpdateUserAddress();
  const queryClient = useQueryClient();

  const { data } = useUserProfile();

  const formRef = useRef<FormHandles>(null);

  const handleZipCode = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      formRef.current.setFieldValue('zip_code', formatCEP(e.target.value));

      if (e.target.value.length === 10) {
        const formattedCep = e.target.value.replace('.', '').replace('-', '');

        await getZipCode(formattedCep).then(data => {
          formRef.current.setFieldValue('street', data?.street);
          formRef.current.setFieldValue('neighborhood', data?.neighborhood);
          formRef.current.setFieldValue('city', data?.city);
          formRef.current.setFieldValue('state', data?.state);
          formRef.current.setFieldValue('country', data?.country);
        });
      }
    },
    [formRef],
  );

  const handleUpdateAddress: SubmitHandler<AddressFormValues> = useCallback(
    async data => {
      performSchemaValidation({
        formRef,
        data,
        schema,
      }).then(() => {
        updateAddress(data, {
          onSuccess: () => {
            queryClient.invalidateQueries(QUERY_KEY_PROFILE);
            success('Perfil atualizado com sucesso');
            onRequestClose();
          },
          onError: () => {
            error('Ops, algo deu errado!');
          },
        });
      });
    },
    [updateAddress],
  );

  return (
    <ModalAddress onClose={onRequestClose}>
      <S.AddressContainer>
        <S.TextContent>
          <RiMapPinLine />
          <p>Endereço</p>
        </S.TextContent>

        <S.AddressForm as={Form} ref={formRef} onSubmit={handleUpdateAddress}>
          <S.AddressWrapper>
            <Input
              type="text"
              variant="secundary"
              placeholder="CEP"
              icon={FiMapPin}
              name="zip_code"
              onChange={e => handleZipCode(e)}
              defaultValue={data?.address?.zip_code}
            />
          </S.AddressWrapper>
          <S.AddressWrapper>
            <Input
              type="text"
              variant="secundary"
              placeholder="Rua"
              name="street"
              icon={FiPackage}
              defaultValue={data?.address?.street}
            />
          </S.AddressWrapper>

          <S.AddressWrapper>
            <Input
              type="text"
              variant="secundary"
              placeholder="N°"
              name="number"
              icon={FiHome}
              onChange={e =>
                formRef.current.setFieldValue(
                  'number',
                  formatAddressNumber(e.target.value),
                )
              }
              defaultValue={data?.address?.number}
            />
          </S.AddressWrapper>

          <S.AddressWrapper>
            <Input
              type="text"
              variant="secundary"
              placeholder="Bairro"
              name="neighborhood"
              icon={BiBuildingHouse}
              defaultValue={data?.address?.neighborhood}
            />
          </S.AddressWrapper>

          <S.AddressWrapper>
            <Input
              type="text"
              variant="secundary"
              placeholder="Complemento"
              name="complement"
              icon={FiInfo}
              defaultValue={
                data?.address.complement ? `${data.address.complement}` : 'N/A'
              }
            />
          </S.AddressWrapper>
          <S.AddressWrapper>
            <Input
              type="text"
              variant="secundary"
              placeholder="Cidade"
              name="city"
              icon={BsPinMap}
              defaultValue={data?.address?.city}
            />
          </S.AddressWrapper>
          <S.AddressWrapper>
            <Input
              type="text"
              variant="secundary"
              maxLength={2}
              placeholder="UF"
              name="state"
              icon={FiMap}
              onChange={e =>
                formRef.current.setFieldValue('state', formatUF(e.target.value))
              }
              defaultValue={data?.address?.state}
            />

            <Input
              type="text"
              variant="secundary"
              placeholder="País"
              name="country"
              icon={FiGlobe}
              onChange={e =>
                formRef.current.setFieldValue(
                  'country',
                  formatCountry(e.target.value),
                )
              }
              defaultValue={data?.address?.country}
            />
          </S.AddressWrapper>

          <Button type="submit" loading={loading} disabled={loading}>
            Confirmar Alterações
          </Button>
        </S.AddressForm>
      </S.AddressContainer>
    </ModalAddress>
  );
}
