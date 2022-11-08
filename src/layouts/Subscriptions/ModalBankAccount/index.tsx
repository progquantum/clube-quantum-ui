import { useCallback, useRef, useState } from 'react';
import { AiOutlineBank } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import noop from 'lodash.noop';

import { RiBankLine } from 'react-icons/ri';

import { formatBankAccount } from 'utils/formatters/formatBankAccount';
import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { Input } from 'components/Input';

import { Modal } from 'components/Modal';

import { Button } from 'components/Button';

import { ModalCreditCard } from '../ModalCreditCard';
import { schema } from './schemas';
import { FormAccountData, ModalProps } from './types';
import * as S from './styles';

export function ModalBankAccount({ onClose }: ModalProps) {
  const { registerBankAccount } = useSubscriptionsDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleRequestModal = () => {
    setShowModal(prevState => !prevState);
  };

  const closeModal = () => {
    onClose();
    handleRequestModal();
  };

  const formRef = useRef<FormHandles>(null);

  const handleBankAccountSubmit: SubmitHandler<FormAccountData> = useCallback(
    data => {
      performSchemaValidation({
        formRef,
        data,
        schema,
      })
        .then(() => {
          registerBankAccount({
            current_account: data.current_account.slice(0, -2),
            current_account_check_number: data.current_account.slice(-1),
            holder_name: data.holder_name,
          });
          closeModal();
        })
        .catch(noop);
    },
    [],
  );
  return (
    <>
      <Modal onClose={onClose}>
        <S.Form as={Form} ref={formRef} onSubmit={handleBankAccountSubmit}>
          <S.Line>
            <RiBankLine size={14} />
            Sua Conta Banco Um
          </S.Line>

          <S.Content>
            <S.Title>Cod Banco</S.Title>
            <S.Title>Agência</S.Title>
          </S.Content>
          <S.Content>
            <S.Data>396 - Banco Um</S.Data>
            <S.Data>0001</S.Data>
          </S.Content>

          <Input
            type="text"
            name="current_account"
            placeholder="00000000-0"
            icon={AiOutlineBank}
            onChange={e =>
              formRef.current.setFieldValue(
                'current_account',
                formatBankAccount(e.target.value),
              )
            }
          />

          <Input
            type="text"
            name="holder_name"
            placeholder="Nome completo"
            icon={FiUser}
          />

          <S.Description>
            A conta a ser cadastrada deve ser a conta Banco Um na qual o CPF
            informado anteriormente está vinculado.
          </S.Description>

          <Button type="submit">Confirmar</Button>
        </S.Form>
      </Modal>
      {showModal ? (
        <ModalCreditCard onRequestClose={handleRequestModal} />
      ) : null}
    </>
  );
}
