import { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { useQueryClient } from 'react-query';
import { useTheme } from 'styled-components';
import Modal from 'react-modal';
import { FiCalendar, FiCreditCard, FiUser, FiLock } from 'react-icons/fi';
import noop from 'lodash.noop';

import { useUpdateCreditCard } from 'hooks/useUpdateCreditCard';
import { QUERY_KEY_FIND_BILLING } from 'hooks/useWallet';
import { formatCreditCardAddSpace } from 'utils/formatters/formatCreditCardAddSpace';
import { formatCreditCardExpiration } from 'utils/formatters/formatCreditCardExpiration';
import { CreditCardIcon } from 'components/Illustrations/CreditCard';
import { Input } from 'components/Input';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { Button } from 'components/Button';
import { formatCreditCardRemoveSpace } from 'utils/formatters/formatCreditCardRemoveSpace';
import { formatCVV } from 'utils/formatters/formatCVV';

import { schema } from './schemas';
import { ModalCreditCardProps, ModalCreditCardFormProps } from './types';
import * as S from './styles';

export function ModalCreditCard({
  isOpen,
  onRequestNewCreditCardModal,
}: ModalCreditCardProps) {
  const { mutateAsync: postCreditCard, isLoading: loading } =
    useUpdateCreditCard();
  const { colors } = useTheme();
  const queryClient = useQueryClient();

  const formRef = useRef<FormHandles>(null);

  const handleSubmitCreditCard: SubmitHandler<
    ModalCreditCardFormProps
  > = async data => {
    performSchemaValidation({
      formRef,
      data,
      schema,
    })
      .then(() => {
        postCreditCard(
          {
            card_number: formatCreditCardRemoveSpace(data.card_number),
            card_name: data.card_name,
            expiration_date: data.expiration_date,
            card_brand: 'visa',
            cvc: data.cvc,
          },
          {
            onSuccess: () => {
              queryClient.invalidateQueries(QUERY_KEY_FIND_BILLING);
              onRequestNewCreditCardModal();
            },
          },
        );
      })
      .catch(noop);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestNewCreditCardModal}
      className="react-modal-container"
      overlayClassName="react-modal-overlay"
    >
      <S.YourAccount>
        <CreditCardIcon color={colors.gray[100]} width="20" height="14" />
        <S.ContentTitle>Atualizar cartão</S.ContentTitle>
      </S.YourAccount>

      <S.CreditCardForm
        as={Form}
        ref={formRef}
        onSubmit={handleSubmitCreditCard}
      >
        <Input
          type="text"
          name="card_name"
          placeholder="Nome impresso no cartão"
          icon={FiUser}
        />

        <Input
          type="text"
          name="card_number"
          placeholder="Número do cartão"
          icon={FiCreditCard}
          onChange={e =>
            formRef.current.setFieldValue(
              'card_number',
              formatCreditCardAddSpace(e.target.value),
            )
          }
        />

        <Input
          type="text"
          name="expiration_date"
          placeholder="Data de vencimento"
          icon={FiCalendar}
          onChange={e =>
            formRef.current.setFieldValue(
              'expiration_date',
              formatCreditCardExpiration(e.target.value),
            )
          }
        />

        <Input
          type="text"
          name="cvc"
          placeholder="CVV"
          icon={FiLock}
          onChange={e =>
            formRef.current.setFieldValue('cvc', formatCVV(e.target.value))
          }
        />

        <Button type="submit" loading={loading} disabled={loading}>
          Confirmar
        </Button>

        <Button
          disabled={loading}
          variant="danger_outline"
          onClick={onRequestNewCreditCardModal}
        >
          Cancelar
        </Button>
      </S.CreditCardForm>
    </Modal>
  );
}
