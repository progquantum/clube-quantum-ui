import Modal from 'react-modal';
import { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';

import { useQueryClient } from 'react-query';

import { FiCalendar, FiMail, FiPhone, FiUser } from 'react-icons/fi';

import { QUERY_KEY_ME_PROFILE } from 'hooks/useFindMeProfile';
import { useUpdatePersonalInformation } from 'hooks/useUpdatePersonalInformation';

import { User } from 'components/Illustrations/User';
import { Input } from 'components/Input';

import { success } from 'helpers/notify/success';
import { error } from 'helpers/notify/error';

import { Button } from 'components/Button';

import { performSchemaValidation } from 'utils/performSchemaValidation';

import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber';

import { formatBirthDate } from 'utils/formatters/formatBirthDate';

import { CloseModal } from 'components/CloseModal';

import {
  PersonalInformationFormProps,
  PersonalInformationProps,
} from './types';
import * as S from './styles';
import { schema } from './schemas';

export function PersonalInformationModal({
  isOpen,
  onRequestClose,
}: PersonalInformationProps) {
  const { mutateAsync: putPersonalInformation, isLoading: loading } =
    useUpdatePersonalInformation();
  const queryClient = useQueryClient();

  const formRef = useRef<FormHandles>(null);

  const handleCloseModal = () => {
    onRequestClose();
  };

  const handleSubmitPersonalInformation: SubmitHandler<PersonalInformationFormProps> =
    useCallback(
      async data => {
        performSchemaValidation({
          formRef,
          data,
          schema,
        }).then(() => {
          const { name, phone, email } = data;
          const birth_date = data.birth_date.split('/').reverse().join('-');
          putPersonalInformation(
            {
              name,
              birth_date,
              phone,
              email,
            },
            {
              onSuccess: () => {
                queryClient.invalidateQueries(QUERY_KEY_ME_PROFILE);
                success('Perfil atualizado com sucesso');
                onRequestClose();
              },
              onError: () => {
                error('Opss, algo deu errado!');
              },
            },
          );
        });
      },
      [putPersonalInformation],
    );
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-container"
    >
      <S.UserInformation>
        <S.TextContent>
          <User width="18" height="20" color="#BBBBBB" />
          <p>Informações Pessoais</p>
        </S.TextContent>

        <S.PersonalInformationForm
          as={Form}
          ref={formRef}
          onSubmit={handleSubmitPersonalInformation}
        >
          <Input type="text" placeholder="Nome" name="name" icon={FiUser} />

          <Input
            type="text"
            placeholder="Data de nascimento"
            name="birth_date"
            icon={FiCalendar}
            onChange={e => {
              formRef.current.setFieldValue(
                'birth_date',
                formatBirthDate(e.target.value),
              );
            }}
          />

          <Input
            type="text"
            placeholder="Telefone"
            name="phone"
            icon={FiPhone}
            onChange={e => {
              formRef.current.setFieldValue(
                'phone',
                formatPhoneNumber(e.target.value),
              );
            }}
          />

          <Input type="text" placeholder="E-mail" name="email" icon={FiMail} />

          <Button type="submit" loading={loading} disabled={loading}>
            Confirmar Alterações
          </Button>
          <CloseModal onClick={handleCloseModal} />
        </S.PersonalInformationForm>
      </S.UserInformation>
    </Modal>
  );
}
