import ReactModal from 'react-modal';
import { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { useQueryClient } from 'react-query';
import { FiCalendar, FiMail, FiPhone, FiUser } from 'react-icons/fi';

import { RiTaskLine } from 'react-icons/ri';

import { useUpdateUserProfile } from 'hooks/user/useUpdateUserProfile';
import { QUERY_KEY_PROFILE } from 'hooks/user/useUserProfile';
import { Input } from 'components/Input';
import { success } from 'helpers/notify/success';
import { Button } from 'components/Button';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber';
import { formatBirthDate } from 'utils/formatters/formatBirthDate';
import { CloseModal } from 'components/CloseModal';

import { UserProfileFormProps, UserProfileProps } from './types';
import { schema } from './schemas';
import * as S from './styles';

export function Modal({ isOpen, onRequestClose }: UserProfileProps) {
  const { mutateAsync: updateUserProfile, isLoading: loading } =
    useUpdateUserProfile();

  const queryClient = useQueryClient();

  const formRef = useRef<FormHandles>(null);

  const handleSubmitPersonalInformation: SubmitHandler<UserProfileFormProps> =
    useCallback(
      async data => {
        performSchemaValidation({
          formRef,
          data,
          schema,
        }).then(() => {
          const birth_date = data.birth_date.split('/').reverse().join('-');

          updateUserProfile(
            {
              ...data,
              birth_date,
            },
            {
              onSuccess: () => {
                queryClient.invalidateQueries(QUERY_KEY_PROFILE);
                success('Perfil atualizado com sucesso');
                onRequestClose();
              },
            },
          );
        });
      },
      [updateUserProfile],
    );

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-container"
    >
      <S.UserInformation>
        <S.TextContent>
          <RiTaskLine />
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
          <CloseModal onClick={onRequestClose} />
        </S.PersonalInformationForm>
      </S.UserInformation>
    </ReactModal>
  );
}
