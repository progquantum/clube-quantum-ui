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

import { Modal as ModalAddress } from 'components/Modal';
import { Location } from 'components/Illustrations/Location';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { QUERY_KEY_PROFILE } from 'hooks/user/useUserProfile';
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
          <Location width="18" height="20" color="#BBBBBB" />
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
            />
          </S.AddressWrapper>
          <S.AddressWrapper>
            <Input
              type="text"
              variant="secundary"
              placeholder="Rua"
              name="street"
              icon={FiPackage}
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
            />
          </S.AddressWrapper>

          <S.AddressWrapper>
            <Input
              type="text"
              variant="secundary"
              placeholder="Bairro"
              name="neighborhood"
              icon={BiBuildingHouse}
            />
          </S.AddressWrapper>

          <S.AddressWrapper>
            <Input
              type="text"
              variant="secundary"
              placeholder="Complemento"
              name="complement"
              icon={FiInfo}
            />
          </S.AddressWrapper>
          <S.AddressWrapper>
            <Input
              type="text"
              variant="secundary"
              placeholder="Cidade"
              name="city"
              icon={BsPinMap}
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
